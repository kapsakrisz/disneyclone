"use client"

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Input } from "./ui/input";

const formSchema = z.object({
    input: z.string().min(2).max(50),
  })

function Searchinput() { 

    const router =useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          input: "",
        },
      });
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
      }
    

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"></form>
      <FormField
      control={form.control}
      name="input"
      render={({field}) => (
        <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
            </FormItem>
      )}
      
      />
    </Form>
  )
}

export default Searchinput
