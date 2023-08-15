import * as React from 'react';
import {
  Input, Box, Heading, Stack, Checkbox, Text, Button, Select,
} from '@chakra-ui/react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormValues } from './types';

type Inputs = {
  example: string,
  exampleRequired: string,
};

export const RequestCard = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>();
  // const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);
  // console.log(errors);
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingX={{ sm: '28px', md: '62px' }}
      paddingTop="44px"
      paddingBottom="22px"
      backgroundColor="white"
      width={{ sm: '100%', md: 'max-content' }}
      maxWidth="504px"
      borderRadius="10px"
      as="form"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      // onSubmit={handleSubmit(onSubmit)}
    >
      <Heading color="#6981CA" borderBottom="2px solid" borderColor="#6981CA" fontSize={{ sm: '24px', md: '34px' }} fontWeight={600} lineHeight={{ sm: '30px', md: '42px' }} width="max-content">Оставьте заявку</Heading>

      <Stack direction="column" spacing="40px" marginTop={{ sm: '54px', md: '80px' }}>
        <Input
          placeholder="Имя"
          variant="unstyled"
          borderBottom="2px solid"
          borderColor="#6981CA"
          borderRadius="none"
          paddingX="12px"
          fontSize={{ sm: '14px', md: '18px' }}
          lineHeight={{ sm: '18px', md: '22px' }}
          {...register('Имя', { required: true, maxLength: 20 })}
        />
        <Input
          placeholder="Телефон"
          variant="unstyled"
          borderBottom="2px solid"
          borderColor="#6981CA"
          borderRadius="none"
          paddingX="12px"
          fontSize={{ sm: '14px', md: '18px' }}
          lineHeight={{ sm: '18px', md: '22px' }}
          {...register('Телефон', { required: true, maxLength: { value: 2, message: 'lol' } })}
        />
        <Input
          placeholder="Почта"
          variant="unstyled"
          borderBottom="2px solid"
          borderColor="#6981CA"
          borderRadius="none"
          paddingX="12px"
          fontSize={{ sm: '14px', md: '18px' }}
          lineHeight={{ sm: '18px', md: '22px' }}
          {...register('Почта', { required: true, maxLength: 20 })}
        />
        <Select
          placeholder="Удобное время связи (МСК)"
          variant="unstyled"
          borderBottom="2px solid"
          borderColor="#6981CA"
          borderRadius="none"
          paddingLeft="12px"
          fontSize={{ sm: '14px', md: '18px' }}
          lineHeight={{ sm: '18px', md: '22px' }}
          cursor="pointer"
          style={{
            paddingLeft: '12px',
          }}
          {...register('Время', { required: true })}
        >
          <option>7:00 - 10:00</option>
          <option>10:00 - 13:00</option>
          <option>13:00 - 16:00</option>
        </Select>
      </Stack>

      <Box
        display="flex"
        marginTop="40px"
        alignItems="center"
      >
        <Checkbox fontSize="14px" borderColor="#6981CA" size="md" {...register('Согласие', { required: true })} />
        <Text marginLeft="10px" fontSize="14px">Я согласен на обработку персональных данных</Text>
      </Box>

      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        marginTop="40px"
      >
        <Input
          border="2px solid"
          borderColor="#6981CA"
          paddingX="30px"
          paddingY="10px"
          backgroundColor="transparent"
          fontSize="14px"
          lineHeight="18px"
          type="submit"
          value="Отправить"
          cursor="pointer"
          _hover={{
            color: 'white',
            backgroundColor: '#6981CA',
          }}
        />
      </Box>
    </Box>
  );
};
