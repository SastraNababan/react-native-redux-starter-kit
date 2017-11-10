import React, { Component } from "react";
import {Image,StyleSheet,Platform, Dimensions} from "react-native";
import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
} from "native-base";

const logo = require("../images/logo.png");

const menus = [
	{
		name: "Home",
		route: "HomeScreen",
		icon: "ios-arrow-round-forward",
		bg: "#C5F442",
	},
	{
		name: "About",
		route: "AboutScreen",
		icon: "ios-arrow-round-forward",
		bg: "#C5F442",
	},
	{
		name: "Redux",
		route: "ReduxScreen",
		icon: "ios-arrow-round-forward",
		bg: "#C5F442",
	}
	 
];

class DrawerMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

  menuTextStyle(current){
    // if (!current){
    //   return styles.menuTextActive
    // }
    return styles.menuText
  }
	render() {
    const {navigate,state} = this.props.navigation
    const currentRouteKey = state.routes[state.index].key;
    console.log(currentRouteKey);
		return (
			<Container>
				<Content bounces={true} style={{  backgroundColor: "#fff" }}>
					<View style={styles.drawerHeader}>
						<Image square style={styles.logo} source={logo} />
					</View>
					<List
						dataArray={menus}
						renderRow={menu =>
							<ListItem button noBorder onPress={() => navigate(menu.route)} >
								<Left>
									<Icon active name={menu.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={this.menuTextStyle(currentRouteKey==menu.route) }>
										{menu.name}
									</Text>
								</Left>
								{menu.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
											}}
										>
											<Text style={styles.badgeText}>{`${menu.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default DrawerMenu;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles =StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: "#fff"
  },
  drawerHeader: {
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  logo: {
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: Platform.OS === "android" ? 7 : 5
  },
  sidebarIcon: {
    fontSize: 21,
    color: "#fff",
    lineHeight: Platform.OS === "android" ? 21 : 25,
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  menuText: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 15,
  },
  menuTextActive: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 15,
    color:"#29c137"
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  }
})
