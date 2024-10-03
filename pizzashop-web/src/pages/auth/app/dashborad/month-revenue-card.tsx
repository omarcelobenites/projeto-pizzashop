import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard(){
  return (
             <Card>
                <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
                  <CardTitle className="text-base font-semibold" >Receita Total (mês)</CardTitle>
                  <DollarSign className="h4- w-4 text-foreground" />
                </CardHeader>
              <CardContent className="space-y-1">
                  <span className="text-2xl font-bold tracking-tighter">
                    R$ 1248,48
                  </span>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">+ 2%</span> em relação ao mês passado
                  </p>
              </CardContent>
          </Card>
  )
}