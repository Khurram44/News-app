import React from 'react'
import { View, Text,Image } from 'react-native'

const TrendingNews = () => {
  return (
    <View>
      <Image source={{uri: 'https://miro.medium.com/max/1200/1*tlrppotZRnyJ5YtXVH6Eng.jpeg'}}
       style={{width: '100%', height: 200, marginBottom:7}} />
    </View>
  )
}

export default TrendingNews
