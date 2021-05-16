import React from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import BooksList from '../assets/BooksList.json'
import { useScreenDimensions, getImages } from '../conststants/global'

const Library = () => {

    let booksFromJson = []; BooksList.books.map( item => (booksFromJson.push(item)) )

    const screenDimensions = useScreenDimensions();
    const landscape = screenDimensions.isLandscape

    return (
        <ScrollView style={{ backgroundColor: "rgb(242, 242, 242)" }}>
            <View>
                {
                    booksFromJson.map(( item, i) => {
                        return(
                            <View key={i}>
                                <View style={{backgroundColor: '#F2886D', borderRadius: 0, flexDirection: 'row', margin: 10}}>
                                    <View>
                                        <Image
                                            resizeMode="cover"
                                            source={getImages(item.image)}
                                            style={{height: 200, width: 150}}
                                        />
                                    </View>
                                    <View style={{marginLeft: '5%'}}>
                                        <Text style={{flex: 0, width: landscape ? '100%' : '45%', fontSize: 18, marginBottom: 10, marginTop: 10, textAlign: 'left',}}>
                                            { item.title.length >= 43 ? item.title.slice(0, 43 - 1) + '…' : item.title }
                                        </Text>
                                        <Text style={{flex: 0, width: landscape ? '100%' : '45%', fontSize: 15, marginBottom: 10, marginTop: 10, textAlign: 'left',}}>
                                            { item.subtitle.length === 0 ? 'Empty subtitle' : item.subtitle.length >= 40 ? item.subtitle.slice(0, 40 - 1) + '…' : item.subtitle }
                                        </Text>
                                        <Text style={{position: 'absolute', bottom: -5, marginBottom: '5%'}}>
                                            { item.price.length === 0 ? 'Priceless' : item.price }
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Library
