import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Fab from "@mui/material/Fab";
import Skeleton from "@mui/material/Skeleton";

export const ShopBody = styled("div")(({ theme }) => ({
    width: "80%",
    margin: "110px auto",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "80%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      margin: "85px auto",
      width: "90%",
    },
  }));

  export const StyledShopContent = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    margin: "20px auto",
  }));

  export const StyledFilterBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
    padding: "20px 0px 50px 0px",
    position: "sticky",
    top: "70",
  }));

  export const StyledProductsBar = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
  }));

  export const StyledProductsDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "gridView"
})(({ theme, gridView }) => ({
    width: "100%",
    height: gridView ? "auto" : "200px",
    textAlign: gridView && "center",
    borderRadius: "5px",
    boxShadow: "0 0 6px #dfdfdf",
    overflow: "hidden",
    transition: '.5s',
    padding: gridView && "0px 0px 20px 0px",
    background: "#fff",
    "&:hover": {
      background: "#fffbf0",
      cursor: "pointer",
    },
    [theme.breakpoints.up("xl")]: {
      height: gridView ? "auto" : "200px",
    },
    [theme.breakpoints.down("lg")]: {
      height: gridView ? "auto" : "200px",
    },
    [theme.breakpoints.down("md")]: {
      height: gridView ? "500px" : "200px",
      "&:hover": {
        background: "#fff",
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: gridView ? "330px" : "auto",
      paddingBottom:!gridView && '10px',
    },
  }));

  export const StyledProductsImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "gridView"
})(({ theme, gridView }) => ({
    width: gridView ? "200px" : "150px",
    height: gridView ? "200px" : "150px",
    float: !gridView && "left",
    margin: gridView ? "20px auto" : "23px auto",
    [theme.breakpoints.down("md")]: {
      float: !gridView && "left",
      width: gridView ? "150px" : "110px",
      height: gridView ? "150px" : "115px",
      margin: gridView ? "13px" : "10px 0px",
    },
  }));

  export const StyledSkeletonImage = styled(Skeleton, {
  shouldForwardProp: (prop) => prop !== "gridView"
})(({ theme, gridView }) => ({
    width: gridView ? "100%" : "150px",
    height: gridView ? "220px" : "100%",
    float: !gridView && "left",
    margin: gridView ? "0px 0px 25px 0px" : "0px",
    [theme.breakpoints.down("md")]: {
      width: gridView ? "300px" : "150px",
      height: gridView ? "150px" : "100%",
      margin: gridView ? "0px" : "0px",
      overFlow: "hidden",
    },
  }));

  export const StyledProductsDivHeader = styled("div", {
  shouldForwardProp: (prop) => prop !== "gridView"
})(({ theme, gridView }) => ({
    fontSize: "16px",
    fontWeight: 500,
    color: "#555",
    marginTop: "0px",
    textAlign: "center",
    width: "100%",
    height: gridView ? "50px" : "auto",
    [theme.breakpoints.down("md")]: {
      height: gridView ? "80px" : "auto",
    },
  }));

  export const StyledProductsDivText = styled("div", {
  shouldForwardProp: (prop) => prop !== "gridView"
})(({ theme, gridView }) => ({
    fontSize: "25px",
    fontWeight: 450,
    textAlign: gridView && "center",
    color: "#222",
    marginTop: "0px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      textAlign: !gridView && "left",
    },
  }));

  export const StyledLinkTagBar = styled(Grid)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 450,
    color: "#222",
  }));

  export const StyledLinkButton = styled(Button)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 450,
    color: "#222",
    textTransform: "capitalize",
  }));

  export const StyledProductDetails = styled("div", {
  shouldForwardProp: (prop) => prop !== "gridView"
})(({ theme, gridView }) => ({
    float: !gridView && "left",
    width: !gridView && '75%',
    margin: !gridView ? "45px 10px" : "0px 8px",
    [theme.breakpoints.down("md")]: {
      margin: !gridView && "20px 0 0 0",
      float: !gridView && "left",
      width: !gridView && '200px',
      textAlign:!gridView && 'left'
    },
  }));

  export const StyledFabButton = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "gridView" && prop !== "loaded"
})(({ theme, gridView, loaded }) => ({
    background: "#fff",
    border: "1px solid #5fa5e3",
    position: gridView ? "absolute" : "relative",
    marginRight: !gridView && '200',
    display: loaded && gridView ? "flex" : !gridView || !loaded ? "none" : "none",
    justifyContent: gridView ? "flex-start" : "flex-end",
    alignContent: !gridView && "flex-end",
    color: "#5fa5e3",
    margin: gridView ? "15px" : "140px 15px 15px 15px",
    boxShadow: "none",
    float: "right",
    "&:hover": {
      background: "#416cb7",
      border: "1px solid #416cb7",
      color: "#fff",
      zIndex: 999,
    },
    [theme.breakpoints.down("md")]: {
      margin: gridView && "8px",
      position: !gridView && "absolute",
      right: !gridView && "5px",
      border: "none",
      "&:hover": {
        background: "#fff",
        border: "1px solid #fff",
        color: "#fff",
      },
    },
  }));

  export const StyledFabButton2 = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "gridView" && prop !== "loaded"
})(({ theme, gridView, loaded }) => ({
    background: "#fff",
    border: "1px solid #5fa5e3",
    position: gridView ? "absolute" : "relative",
    marginRight: !gridView && '200',
    display: gridView ? "none" : "flex",
    color: "#5fa5e3",
    boxShadow: "none",
    float: "right",
    "&:hover": {
      background: "#416cb7",
      border: "1px solid #416cb7",
      color: "#fff",
      zIndex: 999,
    },
    [theme.breakpoints.down("md")]: {
      border: "none",
      marginTop:'-10px',
      "&:hover": {
        background: "#fff",
        border: "1px solid #fff",
        color: "#fff",
      },
    },
  }));
