import React from "react";
import { debounce } from "lodash";
import { searchByTerm } from "../redux/actions/actions";
import { connect } from "react-redux";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: false };
  }
  handleChange = debounce(text => {
    this.setState({ searching: true });
    this.props.searchByTerm(text);
    // console.log(text);
  }, 500);
  componentWillUmount() {
    this.handleChange.cancel();
  }
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-12 m-auto text-center">
            <h1 className="pt-4">React Giphy</h1>
            <img
              className={
                this.state.searching === false
                  ? "img-fluid mt-2 pt-2"
                  : "d-none "
              }
              alt="Responsive giphy"
              src="https://media.giphy.com/media/xTiTnjXTPMqnKlHL1e/giphy.gif"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-10 m-auto">
            <div
              className={
                this.state.searching === false
                  ? "form-group "
                  : "form-group my-4 py-4 "
              }
            >
              <input
                type="text"
                onChange={e => {
                  e.preventDefault();
                  this.handleChange(e.target.value);
                }} //dont pass e
                className="form-control text-center bg-light p-3 border border-dark shadow-lg rounded-lg"
                placeholder="Search for your favorite Gif"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  results: state.results,
  errors: state.errors
});
export default connect(mapStateToProps, { searchByTerm })(SearchBar);
