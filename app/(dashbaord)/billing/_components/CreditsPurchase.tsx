"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CoinsIcon, CreditCardIcon } from "lucide-react";
import { CreditsPack, PackId } from "@/lib/billing";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { purchaseCredits } from "@/actions/billings";
import { toast } from "sonner";

function CreditsPurchase() {
  const [selectedPack, setSelectedPack] = useState(PackId.MEDIUM);

  const mutation = useMutation({
    mutationFn: purchaseCredits,
    onSuccess: () => {
      toast.success("Credits credited successfully", { id: "purchase" });
    },
    onError: () => {
      toast.success("Something went wrong", { id: "purchase" });
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <CoinsIcon className="h-6 w-6 text-primary" />
          Purchase Credits
        </CardTitle>
        <CardDescription>
          Select the number of credits you want to purchase
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          onValueChange={(value) => setSelectedPack(value as PackId)}
          value={selectedPack}
        >
          {CreditsPack.map((pack) => (
            <div
              key={pack.id}
              className="flex items-center space-x-3 bg-secondary/50 rounded-lg p-3 hover:bg-secondary"
              onClick={() => setSelectedPack(pack.id)}
            >
              <RadioGroupItem value={pack.id} id={pack.id} />
              <Label
                htmlFor={pack.id}
                className="flex justify-between cursor-pointer w-full"
              >
                <span className="font-medium">
                  {pack.name}-{pack.label}
                </span>
                <span className="font-bold text-primary">
                  ${(pack.price / 100).toFixed(2)}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={mutation.isPending}
          onClick={() => mutation.mutate(selectedPack)}
        >
          <CreditCardIcon className="h-5 w-5 mr-2" />
          Purchase credits
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CreditsPurchase;
