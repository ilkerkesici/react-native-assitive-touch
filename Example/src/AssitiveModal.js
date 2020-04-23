import React from 'react';
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export const AssitiveModal = (props) => {
    return(
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={props.visible}
        >
            <TouchableOpacity onPress={() => props.close()} style={styles.container}>
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.text}> Your card component! </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        alignSelf: 'stretch',
        height: 250,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20
    },
    text:{
        color: '#ffffff',
        fontSize: 16
    },
    
});