/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getNews } from './src/news';
import Article from './src/components/Article';

export default class App extends Component {
  state={
    articles: [],
    refreshing: true
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews().then(articles => this.setState({
      articles, refreshing: false
    }))
    .catch(() => this.setState({ refreshing: false }))
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.articles}
          renderItem={({item}) => <Article article ={item}/>}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
