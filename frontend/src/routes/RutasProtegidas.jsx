const RutasProtegidas = ({ children, loged }) => {
  if (loged) {
    return children;
  }
};
