"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {};

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <div className="w-full max-w-md rounded-lg border-2 border-primary-500 bg-white p-16 shadow-rose">
      <h1 className="h2-bold mb-6 text-center">{buttonText + "!"}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {field.name === "username"
                      ? "Username"
                      : field.name.charAt(0).toUpperCase() +
                        field.name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      type={field.name === "password" ? "password" : "text"}
                      {...field}
                      className="paragraph-regular"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <div className="flex-center flex-col">
            <Button
              disabled={form.formState.isSubmitting}
              className="flex-center w-1/2 rounded-full bg-primary-100 px-4 py-2 font-bold text-white hover:bg-primary-500 focus:outline-none"
            >
              {form.formState.isSubmitting
                ? buttonText === "Sign In"
                  ? "Signing In..."
                  : "Signing Up..."
                : buttonText}
            </Button>
          </div>
          {formType === "SIGN_IN" ? (
            <p>
              Don&apos;t have an account?{" "}
              <Link href={ROUTES.SIGN_UP}>Sign up</Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link href={ROUTES.SIGN_IN}>Sign in</Link>
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
