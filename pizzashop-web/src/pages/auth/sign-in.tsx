import  { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import {  toast } from 'sonner'
import { z } from 'zod'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMutation} from '@tanstack/react-query'
import { signIn } from '@/api/sign-in'


const signInForm = z.object({
    email: z.string().email()
})

type SignForm = z.infer<typeof signInForm>

export function SignIn(){

  const [searchParams] = useSearchParams()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignForm>({
    defaultValues:{
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data:SignForm){
    try {
      
      await authenticate({email: data.email})
      toast.success('Enviamos um link de autenticação pata o seu e-mail.',{
        action: {
          label: 'Reenviar',
          onClick: () =>  handleSignIn(data),
        }
      })
    }catch {
        
      toast.error('Credenciais invalidas.')
    }
    
  }

  return ( <>
  <Helmet title="Login" />
  <div className="p-8">
    <Button variant="ghost" asChild className="absolute right-4 top-8">
      <Link to="/sign-up">
        Novo estabelecimento
      </Link>
    </Button>
    <div className="w-[350px] flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tighter">Acessar painel</h1>
        <p className="text-sm text-muted-foreground">Acompanhe as suas vendas pelo painel do parceiro!</p>
      </div>

    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Seu E-mail</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>
      <Button disabled={isSubmitting} className="w-full" type="submit">Acessar Painel</Button>
    </form>
    </div>
  </div>
  </>
  )
}