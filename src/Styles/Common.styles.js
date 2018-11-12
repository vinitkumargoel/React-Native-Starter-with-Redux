import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff'
    },
    containerBody: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        marginTop: 15,
    },
    button: {
        marginTop: 15,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    homeIconLeft: {
        borderRightWidth: 0.7,
        borderRightColor: '#e6e6e6'
    },
    homeIcon: {
        borderBottomWidth: 0.7,
        borderBottomColor: '#e6e6e6'
    }
});

export default styles;