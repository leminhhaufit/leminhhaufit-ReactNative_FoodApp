import React, { useState, useContext } from 'react';
import { View, Text} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
function Loader() {

    return (
        <SkeletonPlaceholder>
        <View style={{flexDirection: "row", alignItems: "center",justifyContent:'center'}}>
            <View style={{ width: 60, height: 60, borderRadius: 1,margin:5}} />
            <View style={{ marginLeft: 10,flex:0.8 }}>
                <View style={{ width: "90%", height: 20, borderRadius: 4 }} />
                <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                />
            </View>
        </View>
    </SkeletonPlaceholder>
    );
}
export default Loader;