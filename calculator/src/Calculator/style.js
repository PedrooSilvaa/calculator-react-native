
import styled from "styled-components/native";


export const Container = styled.View({
    flex: 1,
    display: 'flex',
    padding: '30px',
    backgroundColor: '#17181A',
    justifyContent: 'center',
    alignItems: 'center'
})

export const DisplayContainer = styled.View ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0 10px',
    width: '100%'
})

export const DisplayCountText = styled.Text ({
    display: 'flex',
    color: '#818181',
    fontSize: 35
})

export const DisplayResultText = styled.Text ({
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    fontSize: 80,
    fontWeight: 'bold'
})


export const LocalButtons = styled.View ({
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '0 10px',
})

 const ApagarContainer = styled.TouchableOpacity ({
    backgroundColor: '#616161',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    width: '62px',
    height: '62px'
    
})

const ApagarText = styled.Text ({
    color: '#A5A5A5',
    fontSize: '30px'
})

export const ButtonApagar = ({title, onPress}) => (
    <ApagarContainer onPress={onPress}>
       <ApagarText>{title}</ApagarText>
    </ApagarContainer>
)

 const FunctionContainer = styled.TouchableOpacity ({
    backgroundColor: '#005DB2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '16px',
    width: '62px',
    height: '62px'
    
})

const FunctionText = styled.Text ({
    color: '#339DFF',
    fontSize: '30px'
})

export const ButtonFunction = ({title, onPress}) => (
    <FunctionContainer onPress={onPress}>
       <FunctionText>{title}</FunctionText>
    </FunctionContainer>
)

 const NumerosContainer = styled.TouchableOpacity ({
    backgroundColor: '#303136',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '16px',
    width: '62px',
    height: '62px'
    
})

const NumerosText = styled.Text ({
    color: '#29A8FF',
    fontSize: '30px'
})

export const ButtonNumeros = ({title, onPress}) => (
    <NumerosContainer onPress={onPress}>
       <NumerosText>{title}</NumerosText>
    </NumerosContainer>
)

 const Numero0Container = styled.TouchableOpacity ({
    backgroundColor: '#303136',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '16px',
    width: '143px',
    height: '62px'
    
})

const Numero0Text = styled.Text ({
    color: '#29A8FF',
    fontSize: '30px'
})

export const ButtonNumero0 = ({title, onPress}) => (
    <Numero0Container onPress={onPress}>
       <Numero0Text>{title}</Numero0Text>
    </Numero0Container>
)

 const FunctionMaisContainer = styled.TouchableOpacity ({
    backgroundColor: '#303136',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '12px',
    width: '62px',
    height: '96px'
    
})

const FunctionMaisText = styled.Text ({
    color: '#29A8FF',
    fontSize: '30px'
})

export const ButtonFunctionMais = ({title, onPress}) => (
    <FunctionMaisContainer onPress={onPress}>
       <FunctionMaisText>{title}</FunctionMaisText>
    </FunctionMaisContainer>
)

 const FunctionIgualContainer = styled.TouchableOpacity ({
    backgroundColor: '#1991FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '12px',
    width: '62px',
    height: '96px'
    
})

const FunctionIgualText = styled.Text ({
    color: '#B2DAFF',
    fontSize: '30px'
})

export const ButtonFunctionIgual = ({title, onPress}) => (
    <FunctionIgualContainer onPress={onPress}>
       <FunctionIgualText>{title}</FunctionIgualText>
    </FunctionIgualContainer>
)

export const LocalButtonLateral = styled.View ({
    gap: '21px',
    display: 'flex',
    flexDirection: 'column'
})

export const LocalButtonCentral = styled.View ({
    width: '72.6%',
    display: 'flex',
    gap: '19.5px',
    flexDirection: 'row',
    flexWrap: 'wrap'
})

