import React, { useState } from 'react'
import { ButtonApagar, ButtonConfig, ButtonFunction, ButtonFunctionMais, ButtonFunctionIgual, ButtonNumeros, ButtonNumero0, Container, DisplayContainer, DisplayCountText, DisplayResultText, LocalButtons, LocalButtonLateral, LocalButtonCentral } from './style'


const Calc = () => {
  const [conta, setConta] = useState();
  const [resultado, setResultado] = useState()
  return (

    <Container>
      <DisplayContainer>
        <DisplayCountText>
          {conta}
        </DisplayCountText>
        <DisplayResultText>
          ={resultado}
        </DisplayResultText>
      </DisplayContainer>

      <LocalButtons>
  
          <ButtonApagar title='Ac' onPress={() => {setConta(); setResultado();}}/>
          <ButtonApagar title='<X'onPress={() => setConta(conta.slice(0, -1))}/>
          <ButtonFunction title='/' onPress={() => setConta(conta ? conta + '/' : '')}/>
          <ButtonFunction title='*' onPress={() => setConta(conta ? conta + '*' : '')}/>
  
        <LocalButtonCentral>
          <ButtonNumeros title='7' onPress={() => setConta(conta ? conta + '7' : '7')}/>
          <ButtonNumeros title='8' onPress={() => setConta(conta ? conta + '8' : '8')}/>
          <ButtonNumeros title='9' onPress={() => setConta(conta ? conta + '9' : '9')}/>
  
          <ButtonNumeros title='4' onPress={() => setConta(conta ? conta + '4' : '4')}/>
          <ButtonNumeros title='5' onPress={() => setConta(conta ? conta + '5' : '5')}/>
          <ButtonNumeros title='6' onPress={() => setConta(conta ? conta + '6' : '6')}/>
  
          <ButtonNumeros title='1' onPress={() => setConta(conta ? conta + '1' : '1')}/>
          <ButtonNumeros title='2' onPress={() => setConta(conta ? conta + '2' : '2')}/>
          <ButtonNumeros title='3' onPress={() => setConta(conta ? conta + '3' : '3')}/>
  
          <ButtonNumero0 title='0' onPress={() => setConta(conta ? conta + '0' : '0')}/>
          <ButtonNumeros title='.' onPress={() => setConta(conta ? conta + '.' : '')}/>
        </LocalButtonCentral>

  
        <LocalButtonLateral>
          <ButtonFunction title='-' onPress={() => setConta(conta ? conta + '-' : '-')}/>
          <ButtonFunctionMais title='+' onPress={() => setConta(conta ? conta + '+' : '')}/>
          <ButtonFunctionIgual title='=' onPress={() => setResultado(eval(conta))}/>
        </LocalButtonLateral>

      </LocalButtons>

    </Container>

  )
}

export default Calc