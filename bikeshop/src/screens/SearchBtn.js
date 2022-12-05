import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get("window");

const SPACING = 10;
// const ITEM_WIDTH = width / 2 - SPACING * 3;

const SearchBtn = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [textSearch, settextSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState(0);

    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem('curUser');
        curUser = JSON.parse(curUser);
        setUser(curUser);
    };

    const onSearch = () => {
        if (textSearch.trim() !== '') {
            navigation.navigate('Search', { text: textSearch })
        }
    }
    useEffect(() => {
        getUserData();
    }, []);
    const categories = [
        "All",
        "Prince",
        "Nytro Dust",
        "Dra",
        "Grevil",
        "Red",
        "Paris",
    ];
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ paddingHorizontal: SPACING * 2, paddingVertical: SPACING * 4 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: 'lightgray',
                            marginTop: SPACING * 2,
                            marginBottom: -SPACING * 2,
                            paddingVertical: SPACING,
                            paddingHorizontal: SPACING * 2.5,
                            borderRadius: SPACING * 3,
                        }}
                    >
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor='#000'
                            style={{
                                color: '#000',
                                fontSize: SPACING * 1.5,
                                marginRight: SPACING,
                                flex: 1
                            }}
                            onChangeText={settextSearch}
                            value={textSearch}
                            onBlur={onSearch}
                        />
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={onSearch}>
                            <Ionicons name="search" color='#000' size={SPACING * 2.5} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ paddingLeft: 25, paddingBottom: 20 }}>
                    Recommend
                </Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {categories.map((value, item) => (
                        <TouchableOpacity
                            onPress={() => {
                                settextSearch(value);
                            }}
                            style={{
                                backgroundColor: "lightgray",
                                paddingHorizontal: 12,
                                paddingVertical: 12,
                                marginLeft: 20,
                                marginBottom: 12,
                                borderRadius: 100,
                                borderColor: '#000'
                            }}
                            key={item}
                        >
                            <Text>{value}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default SearchBtn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categr: {
        paddingLeft: 20,
    }
});