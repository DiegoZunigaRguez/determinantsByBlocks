import React from "react";

const Laplace5x5 = (props) => {
  const { parametro1, parametro2 } = props;
  const generateDeterminantContent = (matrix, step) => {

    const shouldHighlightCell = (rowIndex, columnIndex, step) => {
      switch (step) {
        case 7:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 8:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 9:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__laplace";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 10:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 12:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 13:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 14:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 15:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 17:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 18:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 19:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 20:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 22:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 23:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 24:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 25:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 27:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 28:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 29:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__laplace";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 30:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 32:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 33:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
        case 34:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__laplace";
                case 3:
                  return "highlight";
                default:
                  return "";
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                case 3:
                  return "highlight__down";
                default:
                  return "";
              }
            default:
              return false;
          }
          case 41:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 42:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__laplace";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 43:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__laplace";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
            case 49:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__laplace";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight";
                    default:
                      return "";
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                default:
                  return false;
              }
            case 50:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__laplace";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight";
                    default:
                      return "";
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                default:
                  return false;
              }
            case 51:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight";
                    case 3:
                      return "highlight__laplace";
                    default:
                      return "";
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                default:
                  return false;
              }
              case 57:
                switch (rowIndex) {
                  case 0:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__laplace";
                      case 1:
                        return "highlight";
                      case 2:
                        return "highlight";
                      case 3:
                        return "highlight";
                      default:
                        return "";
                    }
                  case 1:
                    switch (columnIndex) {
                      case 0:
                        return "highlight";
                      case 1:
                        return "highlight__down";
                      case 2:
                        return "highlight__down";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  case 2:
                    switch (columnIndex) {
                      case 0:
                        return "highlight";
                      case 1:
                        return "highlight__down";
                      case 2:
                        return "highlight__down";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  case 3:
                    switch (columnIndex) {
                      case 0:
                        return "highlight";
                      case 1:
                        return "highlight__down";
                      case 2:
                        return "highlight__down";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  default:
                    return false;
                }
              case 58:
                switch (rowIndex) {
                  case 0:
                    switch (columnIndex) {
                      case 0:
                        return "highlight";
                      case 1:
                        return "highlight__laplace";
                      case 2:
                        return "highlight";
                      case 3:
                        return "highlight";
                      default:
                        return "";
                    }
                  case 1:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__down";
                      case 1:
                        return "highlight";
                      case 2:
                        return "highlight__down";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  case 2:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__down";
                      case 1:
                        return "highlight";
                      case 2:
                        return "highlight__down";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  case 3:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__down";
                      case 1:
                        return "highlight";
                      case 2:
                        return "highlight__down";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  default:
                    return false;
                }
              case 59:
                switch (rowIndex) {
                  case 0:
                    switch (columnIndex) {
                      case 0:
                        return "highlight";
                      case 1:
                        return "highlight";
                      case 2:
                        return "highlight__laplace";
                      case 3:
                        return "highlight";
                      default:
                        return "";
                    }
                  case 1:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__down";
                      case 1:
                        return "highlight__down";
                      case 2:
                        return "highlight";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  case 2:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__down";
                      case 1:
                        return "highlight__down";
                      case 2:
                        return "highlight";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  case 3:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__down";
                      case 1:
                        return "highlight__down";
                      case 2:
                        return "highlight";
                      case 3:
                        return "highlight__down";
                      default:
                        return "";
                    }
                  default:
                    return false;
                }
                case 67:
                  switch (rowIndex) {
                    case 0:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__laplace";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight";
                        case 3:
                          return "highlight";
                        default:
                          return "";
                      }
                    case 1:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    case 2:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    case 3:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    default:
                      return false;
                  }
                case 68:
                  switch (rowIndex) {
                    case 0:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__laplace";
                        case 2:
                          return "highlight";
                        case 3:
                          return "highlight";
                        default:
                          return "";
                      }
                    case 1:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight__down";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    case 2:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight__down";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    case 3:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight__down";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    default:
                      return false;
                  }
                case 69:
                  switch (rowIndex) {
                    case 0:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight__laplace";
                        case 3:
                          return "highlight";
                        default:
                          return "";
                      }
                    case 1:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    case 2:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    case 3:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight";
                        case 3:
                          return "highlight__down";
                        default:
                          return "";
                      }
                    default:
                      return false;
                  }
                  case 76:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__laplace";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight";
                    default:
                      return "";
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                default:
                  return false;
              }
            case 77:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__laplace";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight";
                    default:
                      return "";
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                default:
                  return false;
              }
            case 78:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight";
                    case 3:
                      return "highlight__laplace";
                    default:
                      return "";
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight__down";
                    default:
                      return "";
                  }
                default:
                  return false;
              }
      }
    };

    const shouldHighlightCell2 = (rowIndex, columnIndex, step) => {
      switch (step) {
        case 12:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 13:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 14:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 15:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 17:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                case 2:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                case 2:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 18:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 19:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 20:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 22:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 23:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 24:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                case 1:
                  return "highlight";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight__down";
                case 1:
                  return "highlight__down";
                default:
                  return false;
              }
            default:
              return false;
          }
        case 25:
          switch (rowIndex) {
            case 0:
              switch (columnIndex) {
                case 0:
                  return "highlight__laplace";
                default:
                  return false;
              }
            case 1:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 2:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            case 3:
              switch (columnIndex) {
                case 0:
                  return "highlight";
                default:
                  return false;
              }
            default:
              return false;
          }
          case 41:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 42:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 43:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__laplace";
                  case 2:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
            case 49:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight";
                    default:
                      return false;
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    default:
                      return false;
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    default:
                      return false;
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    default:
                      return false;
                  }
                default:
                  return false;
              }
            case 50:
              switch (rowIndex) {
                case 0:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    default:
                      return false;
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    default:
                      return false;
                  }
                case 2:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    default:
                      return false;
                  }
                case 3:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    default:
                      return false;
                  }
                default:
                  return false;
              }
              case 51:
                switch (rowIndex) {
                  case 0:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__laplace";
                      default:
                        return false;
                    }
                  case 1:
                    switch (columnIndex) {
                      case 0:
                        return "highlight";
                      default:
                        return false;
                    }
                  case 2:
                    switch (columnIndex) {
                      case 0:
                        return "highlight";
                      default:
                        return false;
                    }
                  case 3:
                    switch (columnIndex) {
                      case 0:
                        return "highlight__down";
                      default:
                        return false;
                    }
                  default:
                    return false;
                }
                case 76:
                  switch (rowIndex) {
                    case 0:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight";
                        default:
                          return false;
                      }
                    case 1:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    case 2:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    case 3:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    default:
                      return false;
                  }
                case 77:
                  switch (rowIndex) {
                    case 0:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__laplace";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight";
                        default:
                          return false;
                      }
                    case 1:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    case 2:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    case 3:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__down";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    default:
                      return false;
                  }
                case 78:
                  switch (rowIndex) {
                    case 0:
                      switch (columnIndex) {
                        case 0:
                          return "highlight";
                        case 1:
                          return "highlight__laplace";
                        case 2:
                          return "highlight";
                        default:
                          return false;
                      }
                    case 1:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    case 2:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    case 3:
                      switch (columnIndex) {
                        case 0:
                          return "highlight__down";
                        case 1:
                          return "highlight";
                        case 2:
                          return "highlight__down";
                        default:
                          return false;
                      }
                    default:
                      return false;
                  }
      }
    };

    const calculateDeterminant = (matrix) => {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    };

    const calculateMult = (num1, num2) => {
      return num1 * num2;
    };

    const calculatSum1 = (num1, num2, num3) => {
      return num1 + num2 + num3;
    };

    const calculateSum = (num1, num2, num3, num4) => {
      return num1 + num2 + num3 + num4;
    };

    //Se declaran las primeras matrices
    const det_1 = [
      [matrix[3][3], matrix[3][4]],
      [matrix[4][3], matrix[4][4]],
    ];

    const det_2 = [
      [matrix[3][2], matrix[3][4]],
      [matrix[4][2], matrix[4][4]],
    ];

    const det_3 = [
      [matrix[3][2], matrix[3][3]],
      [matrix[4][2], matrix[4][3]],
    ];

    const det1_4=[];
    //const a22=;
    det1_4[0]=calculateMult([matrix[2][2]], calculateDeterminant(det_1));
    det1_4[1]=calculateMult([matrix[2][3]], calculateDeterminant(det_2));
    det1_4[2]=calculateMult([matrix[2][4]], calculateDeterminant(det_3));

    const det_4 = [
      [matrix[3][1], matrix[3][4]],
      [matrix[4][1], matrix[4][4]],
    ];

    const det_5 = [
      [matrix[3][1], matrix[3][3]],
      [matrix[4][1], matrix[4][3]],
    ];

    const det_6 = [
      [matrix[3][1], matrix[3][2]],
      [matrix[4][1], matrix[4][2]],
    ];

    const det_7 = [
      [matrix[3][0], matrix[3][4]],
      [matrix[4][0], matrix[4][4]],
    ];

    const det_8 = [
      [matrix[3][0], matrix[3][3]],
      [matrix[4][0], matrix[4][3]],
    ];

    const sum1_4=[];
    sum1_4[0]=calculateMult([matrix[1][1]],
      calculatSum1(calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_1)), 1)
              ,calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)
              ,calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1)));
    sum1_4[1]=calculateMult([matrix[1][2]],
      calculatSum1(calculateMult([matrix[2][1]], calculateDeterminant(det_1))
              ,calculateMult(calculateMult(matrix[2][3], calculateDeterminant(det_4)), -1)
              ,calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_5)), 1)));
    sum1_4[2]=calculateMult([matrix[1][3]],
      calculatSum1(calculateMult(matrix[2][1], calculateDeterminant(det_2))
            ,calculateMult(calculateMult(matrix[2][2], calculateDeterminant(det_4)), -1)
            ,calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_6)), 1)));

    sum1_4[3]=calculateMult([matrix[1][4]],
      calculatSum1(calculateMult(calculateMult([matrix[2][1]], calculateDeterminant(det_3)), 1),
            calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_5)), -1),
            calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_6)), 1)));

    const sum2_4=[];
    sum2_4[0]=calculateMult([matrix[1][0]],
      calculatSum1(calculateMult([matrix[2][2]], calculateDeterminant(det_1)),
            calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)
            ,calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1)));

    switch (step) {
      case 1:
        return (
          <div className="laplace">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="laplace">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="laplace">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="laplace">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="laplace__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="laplace__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 9:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 10:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 11:
        return (
          <div className="laplace__4">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 12:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 13:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 14:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 15:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 16:
        return (
          <div className="laplace__4">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 17:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 18:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 19:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 20:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 21:
        return (
          <div className="laplace__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 22:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 23:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 24:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 25:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 26:
        return (
          <div className="laplace__6">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 27:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 28:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 29:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 30:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 31:
        return (
          <div className="laplace__6">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 32:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 33:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 34:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 35:
        return (
          <div className="laplace">
            <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            <>
              <p>(</p>
              <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
              <p>)</p>
            </>
            
          </div>
        );
      case 36:
        return (
          <div className="laplace">
            <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            <>
              <p>(</p>
              <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_1)}</p>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_2)}</p>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_3)}</p>
              <p>)</p>
            </>
            
          </div>
        );
      case 37:
        return (
          <div className="laplace">
            <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            <>
              <p>(</p>
              <p>({det1_4[0]})</p>
            <p>-</p>
            <p>({det1_4[1]})</p>
            <p>+</p>
            <p>({det1_4[2]})</p>
              <p>)</p>
            </>
            
          </div>
        );
      case 38:
        return (
          <div className="laplace">
            <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            <>
              <p>(</p>
              <p>{calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_1)), 1)}</p>
            <p>{calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)}`
                : calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)}</p>
            <p>{calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1)}`
                : calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1)}</p>
              <p>)</p>
            </>
            
          </div>
        );
      case 39:
        return (
          <div className="laplace">
            <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            <>
              <p>(</p>
              <p>{calculatSum1(calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_1)), 1)
              ,calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)
              ,calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1))}</p>
              <p>)</p>
            </>
            
          </div>
        );
      case 40:
        return (
          <div className="laplace">
            <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            <>
              <p>(</p>
              <p>{calculatSum1(calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_1)), 1)
              ,calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)
              ,calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1))}</p>
              <p>)</p>
            </>
            <p>=</p>
            <p>{sum1_4[0]}</p>
          </div>
        );
      case 41:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell2(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 42:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell2(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 43:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell2(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 44:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>(</p>
              <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
              <p>)</p>
            </>

          </div>
        );
      case 45:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>(</p>
              <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_1)}</p>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_4)}</p>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_5)}</p>
              <p>)</p>
            </>

          </div>
        );
      case 46:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>(</p>
              <p>{calculateMult([matrix[2][1]], calculateDeterminant(det_1))}</p>
              <p>
              {calculateMult(calculateMult(matrix[2][3], calculateDeterminant(det_4)), -1) >= 0
                ? `+${calculateMult(calculateMult(matrix[2][3], calculateDeterminant(det_4)), -1)}`
                : calculateMult(calculateMult(matrix[2][3], calculateDeterminant(det_4)), -1)}
            </p>
            <p>
              {calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_5)), 1) >= 0
                ? `+${calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_5)), 1)}`
                : calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_5)), 1)}
            </p>
              <p>)</p>
            </>

          </div>
        );
      case 47:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>(</p>
              <p>{calculatSum1(calculateMult([matrix[2][1]], calculateDeterminant(det_1))
              ,calculateMult(calculateMult(matrix[2][3], calculateDeterminant(det_4)), -1)
              ,calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_5)), 1))}</p>
              <p>)</p>
            </>

          </div>
        );
      case 48:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>(</p>
              <p>{calculatSum1(calculateMult([matrix[2][1]], calculateDeterminant(det_1))
              ,calculateMult(calculateMult(matrix[2][3], calculateDeterminant(det_4)), -1)
              ,calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_5)), 1))}</p>
              <p>)</p>
            </>
            <p>=</p>
            <p>{sum1_4[1]}</p>
          </div>
        );
      case 49:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell2(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 50:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell2(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 51:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell2(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell2(
                            rowIndex,
                            columnIndex,
                            step
                          ) === "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 52:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>)</p>
          </div>
        );
      case 53:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_2)}</p>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_4)}</p>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_6)}</p>
            <p>)</p>
          </div>
        );
      case 54:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculateMult(matrix[2][1], calculateDeterminant(det_2))}</p>
            <p>
              {calculateMult(calculateMult(matrix[2][2], calculateDeterminant(det_4)), -1) >= 0
                ? `+${calculateMult(calculateMult(matrix[2][2], calculateDeterminant(det_4)), -1)}`
                : calculateMult(calculateMult(matrix[2][2], calculateDeterminant(det_4)), -1)}
            </p>
            <p>
              {calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_6)), 1) >= 0
                ? `+${calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_6)), 1)}`
                : calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_6)), 1)}
            </p>
            <p>)</p>
          </div>
        );
      case 55:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculatSum1(calculateMult(matrix[2][1], calculateDeterminant(det_2))
            ,calculateMult(calculateMult(matrix[2][2], calculateDeterminant(det_4)), -1)
            ,calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_6)), 1))}</p>
            <p>)</p>
          </div>
        );
      case 56:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculatSum1(calculateMult(matrix[2][1], calculateDeterminant(det_2))
            ,calculateMult(calculateMult(matrix[2][2], calculateDeterminant(det_4)), -1)
            ,calculateMult(calculateMult(matrix[2][4], calculateDeterminant(det_6)), 1))}</p>
            <p>)</p>
            <p>=</p>
            <p>{sum1_4[2]}</p>
          </div>
        );
      case 57:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                                        <div
                                        className={`matrix-cell ${
                                          shouldHighlightCell(rowIndex, columnIndex, step) ===
                                          "highlight"
                                            ? "highlight"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__down"
                                            ? "highlight__down"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__laplace"
                                            ? "highlight__laplace"
                                            : ""
                                        }`}
                                        key={columnIndex}
                                      >
                                        <input type="text" value={cell} readOnly />
                                      </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 58:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                                        <div
                                        className={`matrix-cell ${
                                          shouldHighlightCell(rowIndex, columnIndex, step) ===
                                          "highlight"
                                            ? "highlight"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__down"
                                            ? "highlight__down"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__laplace"
                                            ? "highlight__laplace"
                                            : ""
                                        }`}
                                        key={columnIndex}
                                      >
                                        <input type="text" value={cell} readOnly />
                                      </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 59:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                                        <div
                                        className={`matrix-cell ${
                                          shouldHighlightCell(rowIndex, columnIndex, step) ===
                                          "highlight"
                                            ? "highlight"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__down"
                                            ? "highlight__down"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__laplace"
                                            ? "highlight__laplace"
                                            : ""
                                        }`}
                                        key={columnIndex}
                                      >
                                        <input type="text" value={cell} readOnly />
                                      </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 60:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>)</p>
          </div>
        );
      case 61:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_3)}</p>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_5)}</p>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_6)}</p>
            <p>)</p>
          </div>
        );
      case 62:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>({calculateMult([matrix[2][1]], calculateDeterminant(det_3))})</p>
            <p>-</p>
            <p>({calculateMult([matrix[2][2]], calculateDeterminant(det_5))})</p>
            <p>+</p>
            <p>({calculateMult([matrix[2][3]], calculateDeterminant(det_6))})</p>
            <p>)</p>
          </div>
        );
      case 63:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculateMult(calculateMult([matrix[2][1]], calculateDeterminant(det_3)), 1)}</p>
            <p>
              {calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_5)), -1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_5)), -1)}`
                : calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_5)), -1)}
            </p>
            <p>
              {calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_6)), 1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_6)), 1)}`
                : calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_6)), 1)}
            </p>
            <p>)</p>
          </div>
        );
      case 64:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculatSum1(calculateMult(calculateMult([matrix[2][1]], calculateDeterminant(det_3)), 1),
            calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_5)), -1),
            calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_6)), 1))}</p>
            <p>)</p>
          </div>
        );
      case 65:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculatSum1(calculateMult(calculateMult([matrix[2][1]], calculateDeterminant(det_3)), 1),
            calculateMult(calculateMult([matrix[2][2]], calculateDeterminant(det_5)), -1),
            calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_6)), 1))}</p>
            <p>)</p>
            <p>=</p>
            <p>{sum1_4[3]}</p>
          </div>
        );
      case 66:
        return (
          <div className="laplace__6">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <p>({sum1_4[0]})</p>
              <p>-</p>
              <p>({sum1_4[1]})</p>
              <p>+</p>
              <p>({sum1_4[2]})</p>
              <p>-</p>
              <p>({sum1_4[3]})</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 67:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                                        className={`matrix-cell ${
                                          shouldHighlightCell(rowIndex, columnIndex, step) ===
                                          "highlight"
                                            ? "highlight"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__down"
                                            ? "highlight__down"
                                            : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                              "highlight__laplace"
                                            ? "highlight__laplace"
                                            : ""
                                        }`}
                                        key={columnIndex}
                                      >
                                        <input type="text" value={cell} readOnly />
                                      </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 68:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                   <div
                   className={`matrix-cell ${
                     shouldHighlightCell(rowIndex, columnIndex, step) ===
                     "highlight"
                       ? "highlight"
                       : shouldHighlightCell(rowIndex, columnIndex, step) ===
                         "highlight__down"
                       ? "highlight__down"
                       : shouldHighlightCell(rowIndex, columnIndex, step) ===
                         "highlight__laplace"
                       ? "highlight__laplace"
                       : ""
                   }`}
                   key={columnIndex}
                 >
                   <input type="text" value={cell} readOnly />
                 </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 69:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div
                    className={`matrix-cell ${
                      shouldHighlightCell(rowIndex, columnIndex, step) ===
                      "highlight"
                        ? "highlight"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__down"
                        ? "highlight__down"
                        : shouldHighlightCell(rowIndex, columnIndex, step) ===
                          "highlight__laplace"
                        ? "highlight__laplace"
                        : ""
                    }`}
                    key={columnIndex}
                  >
                    <input type="text" value={cell} readOnly />
                  </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 70:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>)</p>
          </div>
        );
      case 71:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_1)}</p>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_2)}</p>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_3)}</p>
            <p>)</p>
          </div>
        );
      case 72:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>({calculateMult([matrix[2][2]], calculateDeterminant(det_1))})</p>
            <p>-</p>
            <p>({calculateMult([matrix[2][3]], calculateDeterminant(det_2))})</p>
            <p>+</p>
            <p>({calculateMult([matrix[2][4]], calculateDeterminant(det_3))})</p>
            <p>)</p>
          </div>
        );
      case 73:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculateMult([matrix[2][2]], calculateDeterminant(det_1))}</p>
            <p>
              {calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)}`
                : calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)}
            </p>
            <p>
              {calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1)}`
                : calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1)}
            </p>
            <p>)</p>
          </div>
        );
      case 74:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculatSum1(calculateMult([matrix[2][2]], calculateDeterminant(det_1)),
            calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)
            ,calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1))}</p>
            <p>)</p>
          </div>
        );
      case 75:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculatSum1(calculateMult([matrix[2][2]], calculateDeterminant(det_1)),
            calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_2)), -1)
            ,calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_3)), 1))}</p>
            <p>)</p>
            <p>=</p>
            <p>{sum2_4[0]}</p>
          </div>
        );
      case 76:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                                       <div
                                       className={`matrix-cell ${
                                         shouldHighlightCell(rowIndex, columnIndex, step) ===
                                         "highlight"
                                           ? "highlight"
                                           : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                             "highlight__down"
                                           ? "highlight__down"
                                           : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                             "highlight__laplace"
                                           ? "highlight__laplace"
                                           : ""
                                       }`}
                                       key={columnIndex}
                                     >
                                       <input type="text" value={cell} readOnly />
                                     </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                                       <div
                                       className={`matrix-cell ${
                                         shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                         "highlight"
                                           ? "highlight"
                                           : shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                             "highlight__down"
                                           ? "highlight__down"
                                           : shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                             "highlight__laplace"
                                           ? "highlight__laplace"
                                           : ""
                                       }`}
                                       key={columnIndex}
                                     >
                                       <input type="text" value={cell} readOnly />
                                     </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 77:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                                       <div
                                       className={`matrix-cell ${
                                         shouldHighlightCell(rowIndex, columnIndex, step) ===
                                         "highlight"
                                           ? "highlight"
                                           : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                             "highlight__down"
                                           ? "highlight__down"
                                           : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                             "highlight__laplace"
                                           ? "highlight__laplace"
                                           : ""
                                       }`}
                                       key={columnIndex}
                                     >
                                       <input type="text" value={cell} readOnly />
                                     </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                                       <div
                                       className={`matrix-cell ${
                                         shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                         "highlight"
                                           ? "highlight"
                                           : shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                             "highlight__down"
                                           ? "highlight__down"
                                           : shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                             "highlight__laplace"
                                           ? "highlight__laplace"
                                           : ""
                                       }`}
                                       key={columnIndex}
                                     >
                                       <input type="text" value={cell} readOnly />
                                     </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 78:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                                       <div
                                       className={`matrix-cell ${
                                         shouldHighlightCell(rowIndex, columnIndex, step) ===
                                         "highlight"
                                           ? "highlight"
                                           : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                             "highlight__down"
                                           ? "highlight__down"
                                           : shouldHighlightCell(rowIndex, columnIndex, step) ===
                                             "highlight__laplace"
                                           ? "highlight__laplace"
                                           : ""
                                       }`}
                                       key={columnIndex}
                                     >
                                       <input type="text" value={cell} readOnly />
                                     </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                                       <div
                                       className={`matrix-cell ${
                                         shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                         "highlight"
                                           ? "highlight"
                                           : shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                             "highlight__down"
                                           ? "highlight__down"
                                           : shouldHighlightCell2(rowIndex, columnIndex, step) ===
                                             "highlight__laplace"
                                           ? "highlight__laplace"
                                           : ""
                                       }`}
                                       key={columnIndex}
                                     >
                                       <input type="text" value={cell} readOnly />
                                     </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 79:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>)</p>
          </div>
        );
      case 80:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_1)}</p>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_7)}</p>
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_8)}</p>
            <p>)</p>
          </div>
        );
      case 81:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>({calculateMult([matrix[2][0]], calculateDeterminant(det_1))})</p>
            <p>-</p>
            <p>({calculateMult([matrix[2][3]], calculateDeterminant(det_7))})</p>
            <p>+</p>
            <p>({calculateMult([matrix[2][4]], calculateDeterminant(det_8))})</p>
            <p>)</p>
          </div>
        );
      case 82:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculateMult([matrix[2][0]], calculateDeterminant(det_1))}</p>
            <p>
              {calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_7)), -1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_7)), -1)}`
                : calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_7)), -1)}
            </p>
            <p>
              {calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_8)), 1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_8)), 1)}`
                : calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_8)), 1)}
            </p>
            <p>)</p>
          </div>
        );
      case 83:
        return (
          <div className="laplace">
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>(</p>
            <p>{calculateMult([matrix[2][0]], calculateDeterminant(det_1))}</p>
            <p>
              {calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_7)), -1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_7)), -1)}`
                : calculateMult(calculateMult([matrix[2][3]], calculateDeterminant(det_7)), -1)}
            </p>
            <p>
              {calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_8)), 1) >= 0
                ? `+${calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_8)), 1)}`
                : calculateMult(calculateMult([matrix[2][4]], calculateDeterminant(det_8)), 1)}
            </p>
            <p>)</p>
          </div>
        );
      default:
        break;
    }
  };
  return <div>{generateDeterminantContent(parametro1, parametro2)}</div>;
};

export default Laplace5x5;
