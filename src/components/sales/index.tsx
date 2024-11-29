import { Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function Sales() {
  return (
    <Card className="w-full rounded-sm">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="">Últimos clientes</CardTitle>
          <Users className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-4 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Michael Jackson</p>
            <p className="text-sm text-muted-foreground">
              michaeljackson@email.com
            </p>
          </div>
        </article>
        <article className="flex items-center gap-4 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Michael Jackson</p>
            <p className="text-sm text-muted-foreground">
              michaeljackson@email.com
            </p>
          </div>
        </article>
        <article className="flex items-center gap-4 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Michael Jackson</p>
            <p className="text-sm text-muted-foreground">
              michaeljackson@email.com
            </p>
          </div>
        </article>
        <article className="flex items-center gap-4 border-b py-2">
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Michael Jackson</p>
            <p className="text-sm text-muted-foreground">
              michaeljackson@email.com
            </p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}

export default Sales;
