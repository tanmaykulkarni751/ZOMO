import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Landing({ navigation }) {
    const [accessToken,setAccessToken] = useState();
    const [refreshToken,setRefreshToken] = useState();

    const redirectSSO = e => {
        setAccessToken(e.accessToken);
        setRefreshToken(e.refreshToken);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <h2>Zomo</h2>
            <Button
                title="Login using UCSD SSO"
                onPress={redirectSSO} />
        </View>
    )
}
