import React from 'react';
import { StyleSheet, Text, View, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Card, ListItem, Icon, Input, Button } from 'react-native-elements';
import Header from '../header';
export default function Login() {

    
    return(
        <React.Fragment>
       <ScrollView>
        <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
        {/* <View style={styles.container}>   
            <Text style={styles.title}>Create Account</Text> */}
              
            
            <Card containerStyle={styles.card} title="Create Account" titleStyle={{fontSize: 20}}>
            <Input
                    placeholder='First Name'
                    //leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    containerStyle={styles.form}
                />
            <Input
                    placeholder='Last Name'
                    //leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    containerStyle={styles.form}
                />
            <Input
                    placeholder='Username'
                    //leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    containerStyle={styles.form}
                />
            <Input
                    placeholder='Password'
                    //leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    containerStyle={styles.form}
                    secureTextEntry={true}
                />
                
            <Button title="Sign Up" onPress={() => Alert.alert("Nigga","Successfully Signed Up")}/>
            </Card>
            
               
        {/* </View> */}
        </KeyboardAvoidingView>
         </ScrollView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       paddingTop: 40,
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#fff',
        
       
    },
    title: {
        flex: 1,
        textAlign: 'center',
        //justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#fff',
       
    },
    form: {
        marginTop: 5
    }
})