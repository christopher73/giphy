import React from "react";
import { connect } from "react-redux";
import SearchBar from "../Components/SearchBar";
//Material UI
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

class Home extends React.Component {
  componentDidUpdate() {
    console.log(this.props.results);
  }

  render() {
    return (
      <>
        <SearchBar></SearchBar>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden"
          }}
        >
          {this.props.results.loading ? (
            <div className="container">
              <div className="row">
                <div className="col-12 m-auto text-center">
                  <img
                    className="img-fluid mt-2 pt-2"
                    alt="Responsive giphy"
                    src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif"
                  />
                  <h3>{this.props.errors.message}</h3>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <GridList cellHeight={180}>
                {this.props.results.data.map(tile => (
                  <GridListTile key={tile.url}>
                    <img src={tile.images.preview_gif.url} alt={tile.url} />
                    <GridListTileBar
                      title={tile.title}
                      subtitle={
                        <span>
                          by: {tile.source_tld ? tile.source_tld : "unknown"}
                        </span>
                      }
                      actionIcon={
                        <IconButton
                          href={tile.url}
                          target="_blank"
                          aria-label={`info about ${tile.title}`}
                          style={{ color: "rgba(255, 255, 255, 0.54)" }}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  results: state.results,
  errors: state.errors
});
export default connect(mapStateToProps)(Home);
