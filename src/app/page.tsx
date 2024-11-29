import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, PlusSquare, UserPlus, CopyPlus } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-sm">
          <CardHeader>
            <div className="flex items-center justify-center space-x-4">
              <CardTitle className="text-xl sm:text-xl select-none">
                Total de vendas
              </CardTitle>
              <DollarSign />
            </div>
          </CardHeader>
          <div className="flex flex-col items-center justify-center space-y-2">
            <CardDescription className="mx-2">
              Total de vendas em 90 dias
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$68.000,00</p>
            </CardContent>
          </div>
        </Card>

        <Card className="rounded-sm">
          <CardHeader>
            <div className="flex items-center justify-center space-x-4">
              <CardTitle className="text-xl sm:text-xl select-none">
                Novos clientes
              </CardTitle>
              <UserPlus className="ml-auto w-5 h-5" />
            </div>
          </CardHeader>
          <div className="flex flex-col items-center justify-center space-y-2">
            <CardDescription className="mx-2">
              Novos clientes no período de 90 dias
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">144</p>
            </CardContent>
          </div>
        </Card>

        <Card className="rounded-sm">
          <CardHeader>
            <div className="flex items-center justify-center space-x-4">
              <CardTitle className="text-xl sm:text-xl select-none">
                Pedidos do dia
              </CardTitle>
              <PlusSquare className="ml-auto w-5 h-5" />
            </div>
          </CardHeader>
          <div className="flex flex-col items-center justify-center space-y-2">
            <CardDescription className="mx-2">
              Pedidos realizados hoje
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">144</p>
            </CardContent>
          </div>
        </Card>

        <Card className="rounded-sm">
          <CardHeader>
            <div className="flex items-center justify-center space-x-4">
              <CardTitle className="text-xl sm:text-xl select-none">
                Total de pedidos
              </CardTitle>
              <CopyPlus className="ml-auto w-5 h-5" />
            </div>
          </CardHeader>
          <div className="flex flex-col items-center justify-center space-y-2">
            <CardDescription className="mx-2">
              Total de pedidos em 90 dias
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">897</p>
            </CardContent>
          </div>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
      <ChartOverview />
      <Sales />
      </section>
    </main>
  );
}
