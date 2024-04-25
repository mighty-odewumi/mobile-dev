import React from "react";
import { View, Text, StyleSheet, FlatList, SectionList, } from "react-native";

const menuItems = [
  { name: "Lucid Dreams", id: 1, },
  { name: "Rental", id: 2, },
  { name: "Rider", id: 3, },
  { name: "Cake", id: 4, },
  { name: "Doom", id: 5, },
  { name: "Who Shot Cupid", id: 6, },
  { name: "Let Go", id: 7, },
  { name: "All Girls Are The Same", id: 8, },
  { name: "Fine China", id: 9 },
  { name: "Blood on my Jeans", id: 10, }, 
  { name: "Hate Her Friends", id: 11, },
  { name: "Burn", id: 12, },
  { name: "Tell Me You Love Me", id: 13, },
  { name: "Cowboy", id: 14, },
  { name: "Reminds Me of You", id: 15, },
  { name: "K Like A Russian", id: 16, },
  { name: "Stargazing", id: 17, },
  { name: "Hollywood Dreams", id: 18, },
  { name: "Hurt Me", id: 19, },
  { name: "Naruto", id: 20, },
  { name: "Naruto", id: 21, },
  { name: "Naruto", id: 22, },
  { name: "Naruto", id: 23, },
  { name: "Naruto", id: 24, },
  { name: "Naruto", id: 25, },
  { name: "Naruto", id: 26, },
  { name: "Naruto", id: 27, },
  { name: "Naruto", id: 28, },
  { name: "Naruto", id: 29, },
  { name: "Naruto", id: 30, },
  { name: "Naruto", id: 31, },

];

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: 14.22}, 
      { name: "Moutabal", price: 12.22}, 
      { name: "Falafel", price: 16.41}, 
      { name: "Marinated Olives", price: 40.02}, 
      { name: "Kofta", price: 46.12}, 
      { name: "Eggplant Salad", price: 83.84}, 
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Rice Pilaf", price: 1.45}, 
      { name: "Greek Salad", price: 5.99}, 
      { name: "Lentil Soup", price: 8.66}, 
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Smoked Salmon", price: 111.45}, 
      { name: "Tiramisu", price: 220.99}, 
      { name: "Tartufo", price: 241.66}, 
      { name: "Lenti Burger", price: 145.45}, 
      { name: "Kofta", price: 129.09}, 
      { name: "Eggplant", price: 159.99}, 
    ],
  },
  {
    title: "Supper",
    data: [
      { name: "Fries", price: 44.38}, 
      { name: "Buttered Rice", price: 44.38}, 
      { name: "Bread Sticks", price: 44.38}, 
      { name: "Pita Pocket", price: 44.38}, 
      { name: "Kofta", price: 44.38}, 
      { name: "Salad", price: 44.38}, 
    ],
  },
];

const Item = ({item}) => {
  return (
    <View style={scrollMenuStyles.itemsContainer}>
      <Text style={scrollMenuStyles.items}>{item.name}</Text>
      <Text style={scrollMenuStyles.items}>${item.price}</Text>
      {/* <Separator /> */}
    </View>
  )
};

const Separator = () => {
  return (
    <View style={scrollMenuStyles.separator}>
    </View>
  )
};

const Header = ({title}) => {
  return (
    <View>
      <Text style={scrollMenuStyles.title}>{title}</Text>
    </View>
  )
}; 

export default function ScrollMenu() {

  const renderItem = (({item}) => {
    return <Item item={item} />
  });

  const renderSectionHeader = ({section: {title}}) => {
    return <Header title={title}/>
  };

  return (
    <View style={scrollMenuStyles.container}> 
      {/* <FlatList 
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Header}
      /> */}

      <SectionList 
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
      />
    </View>
  )
}

const scrollMenuStyles = StyleSheet.create({
  container: {
    flex: .70,
  },
  title: { 
    color: "black", 
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: 40,
    paddingTop: 20,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 40,
    paddingRight: 40,
  },
  items: { 
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  separator: {
    backgroundColor: "black",
    width: "100%",
    height: 2,
  }
});
