import { useState } from 'react'
import { Heading, Icon, VStack,useTheme} from 'native-base'
import {Feather} from '@expo/vector-icons'
import Logo from '../assets/logo_primary.svg';
import { Input } from './Input';
import { Button } from '../components/Button';


export function SignIn() {
  const [name, setName] = useState('Italo');
  const [password, setPassword] = useState('')

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>

      <Logo />
        <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
            FOGO NA BOMBA, {name} 
          
        </Heading>
        <Input 
        placeholder='E-mail'
        mb={4}
        InputLeftElement={<Icon as={<Feather name='mail' />} ml={4}/>}
        onChangeText={setName}
        />
        <Input 
         placeholder='Password'
         mb={8}
         InputLeftElement={<Icon 
          as={<Feather name='key' />}
          ml={4} />}
         secureTextEntry
         onChangeText={setPassword}
         />

      <Button title='Entrar' w="full"/>
         
    </VStack>
  )
}