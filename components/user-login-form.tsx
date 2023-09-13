"use client";
import { useState } from "react";
import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { userAuthSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import * as z from "zod";
import { toast } from "./ui/use-toast";

type FormData = z.infer<typeof userAuthSchema>;

function UserLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const createUser = await signIn("credentials", {
      email: data.email.toLowerCase(),
      password: data.password,
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    });

    if (createUser?.error) {
      const signInResult = await signIn("email", {
        email: data.email.toLowerCase(),
        password: data.password,
        redirect: false,
        callbackUrl: searchParams?.get("from") || "/dashboard",
      });

      if (!signInResult?.ok) {
        return toast({
          title: "Something went wrong.",
          description: "Your sign in request failed. Please try again.",
          variant: "destructive",
        });
      }

      return toast({
        title: "Check your email",
        description:
          "We sent you a login link. Be sure to check your spam too.",
      });
    }

    setIsLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex gap-3 text-2xl">
              <Icons.logo /> Welcome Back!
            </CardTitle>
            <CardDescription>
              Enter your email below to sign in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <Icons.github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline">
                <Icons.discord className="mr-2 h-4 w-4" />
                Discord
              </Button>
              <Button variant="outline">
                <Icons.apple className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                {...register("email")}
              />
              {errors?.email && (
                <p className="px-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={isPasswordShown ? "text" : "password"}
                autoComplete="new-password"
                {...register("password")}
              />
              <span
                className="absolute right-1 top-7 cursor-pointer"
                onClick={() => setPasswordShown(!isPasswordShown)}
              >
                {isPasswordShown ? (
                  <Icons.passwordShown />
                ) : (
                  <Icons.passwordNotShown size={22} />
                )}
              </span>
              {errors?.password && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <button
              type="submit"
              className={cn("w-full", buttonVariants({ variant: "outline" }))}
              disabled={isLoading}
            >
              Login
            </button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}

export default UserLoginForm;
