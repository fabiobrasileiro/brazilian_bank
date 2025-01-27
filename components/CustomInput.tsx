import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from "@/lib/utils"
import { Control, FieldPath } from "react-hook-form"
import { z } from "zod"



const formSchema = authFormSchema('sign-up')

interface CustomInput{
    control: Control<z.infer<typeof formSchema>>,
    label: string,
    name: FieldPath<z.infer<typeof formSchema>>,
    placeholder: string
}

const CustomInput = ({control, name, label, placeholder}: CustomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
        <div className='form-item'>
            <FormLabel className='form-label'>
                {label}
            </FormLabel>
            <div className='flex w-full flex-col'>
                <FormControl>
                    <Input type={name === 'password' ? 'password' : 'text'} placeholder={placeholder}  className='input-class '{...field}/> 
                </FormControl>
                <FormMessage className='form-message mt-2'/>
            </div>
        </div>
    )}
/>
  )
}

export default CustomInput
