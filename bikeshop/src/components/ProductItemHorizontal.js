import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function ProductItemHorizontal(props) {
    const { item, navigation } = props;
    const goToDetail = () => {
        if (navigation) {
            navigation.navigate("ProductDetail", {
                item: item,
            });
        }
    };
    return (
        <TouchableOpacity style={{ ...styles.container }} onPress={goToDetail}>
            <Image style={styles.imageStyle} source={item.image} />
            <View style={styles.infoContainer}>
                <Text
                    numberOfLines={1}
                    style={{
                        color: "#000",
                        fontWeight: "bold",
                    }}
                >
                    {item?.name}
                </Text>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#000", fontWeight: "bold", width: 200, paddingTop: 10 }}>
                        {item?.price}$
                    </Text>
                    <View
                        style={{
                            padding: 2,
                            backgroundColor: "#000",
                            borderRadius: 8,
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: "#fff",
                            }}
                            source={require("../../assets/Basket.png")}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default ProductItemHorizontal;
const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 14,
    },
    container: {
        backgroundColor: "#fff",
        padding: 4,
        borderRadius: 14,
        flexDirection: "row",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    infoContainer: {
        paddingHorizontal: 12,
        marginBottom: 12,
    },
});
