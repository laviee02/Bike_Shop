import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
    const [user, setuser] = useState(null);
    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem("curUser");
        curUser = JSON.parse(curUser);
        setuser(curUser);
    };
    const logOut = async () => {
        await AsyncStorage.removeItem("curUser");
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    };
    useEffect(() => {
        getUserData(user);
    }, []);
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                width: "100%",
                paddingTop: StatusBar.currentHeight + 30,
                paddingHorizontal: 12,
            }}
        >
            <View style={{ flexDirection: 'column', alignItems: "center" }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {user && user.name}
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        paddingTop: 10,
                    }}
                >
                    {user && user.email}
                </Text>
            </View>
            <TouchableOpacity style={{
                flexDirection: 'row',
                backgroundColor: 'lightgray',
                justifyContent: 'center',
                padding: 15,
                borderRadius: 20,
                marginVertical: 30
            }} onPress={logOut}>
                <Text style={{color: '#000'}}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    );
}
