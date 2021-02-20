import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <h2>Zomo</h2>
            <Button
                title="Login using UCSD SSO"
                onPress={() => navigation.navigate("login")} />
        </View>
    )
}
