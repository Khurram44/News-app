import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config/config';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews'
import { API_KEY } from '../../config/config';

const deviceWidth = Dimensions.get('window').width;

class HomeScreen extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          news: response.articles,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Categories navigation={this.props.navigation} />
        <TrendingNews />
        <View style={{alignItems: 'center'}}>
          {this.state.news.length === 0 ? (
            <View
            style={{
              width: deviceWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color="black" size="large" />
          </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.state.news.map((news, index) =>
                news.urlToImage ? (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('WebView', {
                        url: 'https://www.the-sun.com/money/3980875/cryptocurrency-price-shiba-inu-coin-bitcoin-burger-king-update/',
                      })
                    }>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        elevation: 4,
                        width: deviceWidth - 30,
                        marginVertical: 7,
                      }}>
                      <Image
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png'}}
                        style={{height: 100, width: 100, borderRadius: 10}}
                      />
                      <Text
                        style={{
                          width: deviceWidth - 130,
                          paddingLeft: 10,
                          paddingTop: 5,
                        }}>
                        SHIBA INU coin news got pumped again
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null,
              )}
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}

export default HomeScreen;
