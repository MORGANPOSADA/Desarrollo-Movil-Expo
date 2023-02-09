//react native funtion style
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base'   //nuestro react de native ?


export default function Loading(props) {
    console.log(props);
    const {setShow, text} = props; //las llaves las pongo porque quiero acceder a esa lista de objetos de los componentes
  return (
    <Overlay
        isVisible={show}
        windowsBackgroundColor= 'rgb(0,0,0,0.5)'
        overlayBackgroundColor= 'transparent'
        overlayStyle={styles.overlay}
    >
        <View style={styles.container}>
            <ActivityIndicator
             size="large"
             color="#007bff"
             />
             {text && <Text style={styles.text}>{text}</Text>}    
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay: {
        height: 160,
        width: 250,
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '',
        textTransform: 'uppercase',  //cualquier texto que el usiario me ponga , estara en mayus
        marginTop: 10,
        textAlign: 'center'
    }
});

//&&: es como un if pero sin un else , solamente actua cuando es un true