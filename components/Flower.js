import React from 'react';
import Svg, { Path, G } from 'react-native-svg'


export default class Flower extends React.Component{
    render () {
        return (
            <Svg
              width={1100}
              height={400}
              xmlns="http://www.w3.org/2000/svg"
            >
              <G fillRule="evenodd" strokeMiterlimit={4} display="inline">
              <Path
                  fill={this.props.fillColors[0]}
                  onPress={() => this.props.fillColors[0] = 'green'}
                  stroke="#000"
                  strokeWidth={8}
                  d="M335.663 237.986c29.202-24.342 60.586-230.56 9.385-295.979-73.76 41.41-167.218 217.612-116.882 287.761 50.335 70.15 107.905 6.715 107.497 8.218z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[1]}
                  onPress={() => this.props.onFill(1)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M386.045 310.854c37.921-2.697 183.86-151.734 180.521-234.741-84.056-9.48-262.842 78.934-262.968 165.274-.126 86.34 83.656 68.486 82.447 69.467z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[2]}
                  onPress={() => this.props.onFill(2)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M389.714 408.724c33.878 17.252 235.783-35.14 275.742-107.972-67.118-51.483-265.889-67.97-310.536 5.93-44.647 73.9 36.336 101.825 34.794 102.042z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[3]}
                  onPress={() => this.props.onFill(3)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M329.108 470.123c19.956 32.358 219.64 92.662 291.658 51.254-30.534-78.887-191.705-196.382-268.282-156.5-76.577 39.88-21.947 105.863-23.376 105.246z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[4]}
                  onPress={() => this.props.onFill(4)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M262.062 475.924C255.91 513.44 367.125 689.91 448.651 705.873c28.676-79.58-15.96-273.975-99.926-294.08-83.967-20.104-85.988 65.535-86.663 64.131z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[5]}
                  onPress={() => this.props.onFill(5)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M184.729 458.8c-26.955 26.81-40.125 234.986 16.618 295.662 69.843-47.722 147.481-231.444 91.186-296.906-56.296-65.463-108.079 2.777-107.804 1.245z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[6]}
                  onPress={() => this.props.onFill(6)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M112.007 385.084c-36.076 11.994-140.614 192.5-116.846 272.1C78.951 645.579 230.311 515.687 209.075 432c-21.235-83.688-97.997-45.665-97.068-46.915z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[7]}
                  onPress={() => this.props.onFill(7)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M86.96 304.478c-37.262-7.548-217.756 97.01-236.748 177.883 78.455 31.624 274.379-5.73 297.601-88.889 23.223-83.158-62.282-88.372-60.854-88.994z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill={this.props.fillColors[8]}
                  onPress={() => this.props.onFill(8)}
                  stroke="#000"
                  strokeWidth={8}
                  d="M153.066 223.72c-23.263-32.122-224.294-83.678-289.19-37.586 39.132 79.234 209.68 191.333 279.184 146.573 69.504-44.76 8.544-109.546 10.006-108.987z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M254.876 181.401C251.893 141.854 107.68-7.392 28.256-2.137c-8.187 87.99 78.341 272.832 160.993 271.125 82.652-1.707 64.675-88.829 65.627-87.587z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M297.78 228.183c20-28.572-1.799-218.681-62.856-264.286-55.344 54.395-95.715 232.857-34.286 282.857 61.428 50 97.143-20 97.143-18.571z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M359.904 280.579c32.924-11.506 126.288-178.539 103.374-251.221-76.695 11.818-213.715 133.079-193.066 209.545 20.648 76.467 90.527 40.516 89.692 41.676z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M386.685 366.34c34.14 7.127 200.288-87.802 218.152-161.888-71.798-29.439-251.733 3.758-273.49 79.917-21.758 76.158 56.651 81.408 55.338 81.971z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M347.793 435.268c25.447 23.85 216.727 29.223 270.528-24.752-46-62.496-216.935-127.761-275.14-74.042-58.203 53.719 6.026 98.997 4.612 98.794z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M289.833 456.525c3.573 34.692 144.463 164.18 220.476 158.709 6.252-77.348-80.005-238.712-159.174-236.321-79.17 2.39-60.367 78.692-61.302 77.612z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M217.253 459.96c-17.417 30.216 20.978 217.68 85.801 257.752 50.358-59.041 74.916-240.357 9.338-284.775-65.579-44.418-95.014 28.446-95.14 27.023z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M135.148 412.184c-29.054 19.292-78.2 204.229-38.019 268.984 71.388-30.422 174.154-181.807 135.233-250.79-38.921-68.982-97.736-16.864-97.214-18.194z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M93.592 346.846C58.79 349.124-75.861 485.086-73.23 561.25 3.83 570.383 168.3 490.204 168.864 411c.564-79.202-76.387-63.26-75.272-64.154z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M132.698 259.457c-28.318-22.844-218.686-20.15-265.056 36.259 53.694 60.736 231.634 118.97 282.403 62.632 50.77-56.338-18.776-99.035-17.347-98.891z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  d="M212.655 197.513C200.505 163.219 36.95 65.767-32.102 89.517c13.91 79.866 134.956 222.7 207.717 201.315 72.761-21.384 35.899-94.19 37.04-93.32z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeDashoffset={0}
                  d="M356.352 353.183a120.714 120.714 0 11-241.428 0 120.714 120.714 0 11241.428 0z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
                <Path
                  opacity={0.810241}
                  fill="#fff"
                  strokeWidth={1.3}
                  strokeLinecap="round"
                  strokeDashoffset={0}
                  d="M309.21 355.325a72.857 72.857 0 11-145.715 0 72.857 72.857 0 11145.714 0z"
                  transform="translate(114 66) matrix(.84903 0 0 .84903 65.287 25.963)"
                />
              </G>
            </Svg>
          )
    }
}