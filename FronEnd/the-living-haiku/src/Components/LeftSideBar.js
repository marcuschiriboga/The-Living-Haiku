// import React from "react";
// import _ from "lodash";
// import faker from "faker";
// import "semantic-ui-css/semantic.min.css";
// import { Card, Feed, Search, Grid } from "semantic-ui-react";

// //need to figure this out 100%
// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, "$"),
// }));

// //TODO: float on left as sidebar.

// class LeftSideBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       //for the search bar
//       isLoading: false,
//       results: [],
//       value: "",
//     };
//   }
//   // Need to figure this out
//   //+++++++
//   handleResultSelect = (e, { result }) => this.setState({ value: result.title });

//   handleSearchChange = (e, { value }) => {
//     this.setState({ isLoading: true, value });

//     setTimeout(() => {
//       if (this.state.value.length < 1) return this.setState(this.state);

//       const re = new RegExp(_.escapeRegExp(this.state.value), "i");
//       const isMatch = (result) => re.test(result.title);

//       this.setState({
//         isLoading: false,
//         results: _.filter(source, isMatch),
//       });
//     }, 300);
//   };
//   //++++++++

//   render() {
//     const { isLoading, value, results } = this.state;
//     return (
//       <Card>
//         <Card.Content>
//           <Card.Header>Haiku Tool Bar</Card.Header>
//         </Card.Content>

//         <Grid>
//           <Grid.Column width={6}>
//             <Search
//               loading={isLoading}
//               onResultSelect={this.handleResultSelect}
//               onSearchChange={_.debounce(this.handleSearchChange, 500, {
//                 leading: true,
//               })}
//               results={results}
//               value={value}
//               {...this.props}
//             />
//           </Grid.Column>
//         </Grid>

//         <Card.Content>
//           <Feed>
//             <Feed.Event>
//               <Feed.Label image="/images/avatar/small/jenny.jpg" />
//               <Feed.Content>
//                 <Feed.Date content="lets write a Haiku" />
//                 <Feed.Summary>Post Poem</Feed.Summary>
//               </Feed.Content>
//             </Feed.Event>

//             <Feed.Event>
//               <Feed.Label image="/images/avatar/small/molly.png" />
//               <Feed.Content>
//                 <Feed.Date content="top user rated" />
//                 <Feed.Summary>Top Haiku's</Feed.Summary>
//               </Feed.Content>
//             </Feed.Event>

//             <Feed.Event>
//               <Feed.Label image="/images/avatar/small/elliot.jpg" />
//               <Feed.Content>
//                 <Feed.Date content="your stuff" />
//                 <Feed.Summary>Your Haiku's</Feed.Summary>
//               </Feed.Content>
//             </Feed.Event>
//           </Feed>
//         </Card.Content>
//       </Card>
//     );
//   }
// }

// export default LeftSideBar;
