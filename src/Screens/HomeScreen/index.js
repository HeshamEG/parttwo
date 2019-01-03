import React, {Component} from 'react';
// import { StyleSheet, Text, View} from 'react-native';
import { connect } from "react-redux";
import {HomeScreenWrapper,RenderSeparator,TodoText,TodoTitle,AddTodoModal} from './style'
import { withNavigation } from "react-navigation";

import {getPastTodoList,addTodo} from './../../stateManegment/actions/TodoAction'
import { View, Alert, FlatList, ActivityIndicator ,Button} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
class HomeScreen extends Component{
    constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,visible:true,isVisible:true,
    modalVisible: false,
    todoText:'',
    todoTitle:'',

    };
    this.arrayholder = [];
  }
  componentDidMount() {
    this.initialaize();
    }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  initialaize = () => {
    this.setState({ loading: true });
    this.props.getPastTodoList().then(()=>{
         this.setState({
           data:this.props.todo,
            loading: false,
          });
    this.arrayholder =this.props.todo;

    })
  };
  
  renderSeparator = () => {
    return (
      <RenderSeparator
      />
    );
  };

  searchFilterFunction = text => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.todoTitle.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <HomeScreenWrapper style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </HomeScreenWrapper>
      );
    }
    return (
      <HomeScreenWrapper>
          <AddTodoModal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
                }}>
            <View>
        <TodoTitle placeholder="Title"     onChangeText={(todoTitle) => this.setState({todoTitle})}
    value={this.state.todoTitle}/>
<TodoText
    multiline={true}
    numberOfLines={4}
    onChangeText={(todoText) => this.setState({todoText})}
    value={this.state.todoText}
    />
              <Button
                onPress={() => {
                  if(this.state.todoTitle!=='' && this.state.todoText!==''){
                  this.setModalVisible(!this.state.modalVisible);
                  let todoObj={todoTitle:this.state.todoTitle,todoText:this.state.todoText}
                  this.props.addTodo(todoObj).then(()=>{
                    this.initialaize()
                  })
                }else{
                  Alert.alert('ERROR','Fields are missing')

                }
                }} title="SUBMIT"/>
            </View>
        </AddTodoModal>
 <Button
          onPress={() => {
            this.setModalVisible(true);
          }} title="ADD NEW"/>
           <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
            onPress={()=>{
              console.log(item)
              Alert.alert(`${item.todoTitle}`,`${item.todoText}`)
            }}
              title={`${item.todoTitle}`}
              subtitle={new Date(item.time).toLocaleDateString("en-US")}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
      </HomeScreenWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.todo.todoList,
  }
}
  export default connect(mapStateToProps, {getPastTodoList,addTodo}) (withNavigation(HomeScreen))

