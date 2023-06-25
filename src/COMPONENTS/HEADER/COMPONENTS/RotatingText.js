import React from "react";

const RotatingText = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} viewBox="0 0 100 100">
      <g fill={props.fill}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="12s"
          repeatCount="indefinite"
        ></animateTransform>
        <circle cx="50" cy="50" r="50" fill="none" />
        <path d="m56.859,5.881c-.135.661-.477,1.275-.951,1.677-.701.594-1.476.621-2.163.563-.718-.059-1.545-.248-2.2-1.055-.646-.796-.814-1.923-.732-2.919.08-.967.392-2.074,1.211-2.759.495-.41,1.226-.751,2.302-.662.737.061,1.618.334,2.121.917.321.368.562.959.549,1.621l-.748-.062c0-.471-.178-.877-.405-1.157-.256-.312-.712-.621-1.509-.687-.558-.046-1.154.015-1.714.47-.603.492-.93,1.297-1.011,2.274-.076.917.067,1.972.646,2.631.283.334.784.697,1.592.764.757.062,1.26-.197,1.55-.423.215-.173.608-.562.716-1.255l.747.062Z" />
        <path d="m60.14,8.929l-.71-.209,1.977-6.719.71.209-.844,2.87,3.608,1.061.844-2.87.711.209-1.977,6.718-.71-.209.954-3.244-3.609-1.062-.954,3.244Z" />
        <path d="m71.306,5.542l-1.968,3.711c-.285.539-.597,1.189-.44,1.792.118.459.541.921,1.062,1.197.539.286,1.119.367,1.561.216.573-.206.94-.792,1.255-1.383l1.967-3.711.654.347-2.005,3.781c-.328.619-.78,1.386-1.699,1.646-.802.231-1.488-.053-2.036-.344-.989-.525-1.324-1.11-1.454-1.484-.255-.757.047-1.583.444-2.333l2.006-3.781.653.347Z" />
        <path d="m80.719,17.603c-.487.466-1.117.776-1.736.837-.914.089-1.566-.33-2.099-.768-.556-.457-1.129-1.083-1.208-2.119-.079-1.022.425-2.044,1.06-2.816.616-.749,1.503-1.482,2.566-1.579.641-.055,1.435.08,2.269.766.571.47,1.14,1.195,1.222,1.961.054.485-.084,1.109-.472,1.644l-.579-.476c.268-.388.353-.823.324-1.182-.031-.402-.23-.915-.849-1.423-.433-.355-.958-.645-1.677-.589-.775.062-1.503.537-2.125,1.294-.584.71-1.066,1.659-.967,2.53.042.436.248,1.02.874,1.534.587.482,1.147.556,1.515.534.275-.02.819-.115,1.303-.624l.579.476Z" />
        <path d="m89.439,20.426l.627.766-4.069-.442-1.22,5.029-.614-.75,1.113-4.386-1.708-.191-1.888,1.545-.468-.572,5.415-4.433.469.573-2.832,2.318,5.175.544Z" />
        <path d="m88.228,31.88l-.287-.682,6.451-2.713.287.682-2.756,1.159,1.458,3.465,2.755-1.159.287.682-6.451,2.713-.287-.682,3.115-1.31-1.457-3.465-3.115,1.31Z" />
        <path d="m97.354,38.649c.409.279,1.011.877,1.232,2.046.209,1.101-.061,1.884-.365,2.37-.353.556-1.1,1.288-2.662,1.583-1.514.287-2.521-.092-3.062-.479-.785-.543-1.063-1.366-1.192-2.044-.221-1.169.042-1.932.366-2.421.159-.234.865-1.182,2.664-1.522,1.365-.259,2.4.044,3.02.466Zm-5.107,1.517c-.28.399-.476,1.037-.324,1.833.158.835.591,1.293.977,1.556.547.365,1.355.547,2.495.332,1.308-.248,2.002-.827,2.329-1.357.358-.577.347-1.175.252-1.676-.158-.835-.565-1.267-.863-1.496-.511-.382-1.404-.64-2.672-.4-1.012.192-1.793.635-2.193,1.209Z" />
        <path d="m92.281,50.191l.039-.949,7.072-1.541-.034.83-6.149,1.269,6.021,1.83-.036.869-6.151,1.318,6.024,1.771-.034.829-6.921-2.127.039-.95,6.182-1.316-6.052-1.832Z" />
        <path d="m91.49,58.357l.198-.775,6.121,4.318-.206.804-7.444.837.201-.785,2.132-.217.759-2.955-1.761-1.227Zm1.667,4.125l3.862-.361-3.211-2.178-.651,2.539Z" />
        <path d="m95.627,68.744l-1.27,2.684c-.329.695-.644,1.221-1.273,1.432-.315.104-.793.155-1.38-.122-.406-.192-.743-.462-.94-.909-.156-.372-.154-.703-.11-.937l-.018-.009c-.214.264-.462.368-.567.406-.497.185-.931-.021-1.342-.203l-.722-.319c-.222-.094-.528-.239-.991-.171l.342-.723c.129-.017.405-.04.92.181l.682.289c.441.188.78.358,1.188.176.367-.169.569-.549.681-.784l.944-1.996-2.782-1.316.315-.668,6.324,2.99Zm-3.289-.736l-.922,1.951c-.197.415-.294.9-.184,1.251.101.302.385.612.773.796.442.21.781.171.994.072.442-.188.694-.721.836-1.02l.905-1.915-2.403-1.136Z" />
        <path d="m89.585,79.321c-.432.577-1.01,1.231-2.015,1.404-.67.111-1.631-.008-2.752-.848-1.025-.768-1.555-1.664-1.634-2.46-.085-.938.367-1.726.853-2.375l1.409-1.882,5.607,4.197-1.469,1.963Zm-4.078-5.189l-.833,1.113c-.354.473-.867,1.176-.745,2.08.097.672.604,1.364,1.341,1.916.77.575,1.572.839,2.265.732.776-.119,1.234-.613,1.552-1.038l1.02-1.362-4.599-3.441Z" />
        <path d="m78.453,86.986c-.404.312-.965.239-1.276-.165-.312-.403-.238-.965.165-1.275.404-.312.965-.239,1.276.165.312.403.238.965-.165,1.275Z" />
        <path d="m68.621,95.609c-.668.27-1.501.529-2.449.157-.631-.253-1.39-.854-1.913-2.152-.479-1.188-.466-2.228-.121-2.949.414-.846,1.208-1.284,1.96-1.587l2.18-.879,2.617,6.494-2.273.916Zm-.795-6.549l-1.289.52c-.548.221-1.352.555-1.715,1.392-.266.625-.191,1.479.152,2.333.359.891.909,1.531,1.556,1.799.726.302,1.373.116,1.865-.082l1.577-.636-2.146-5.325Z" />
        <path d="m56.511,95.794l-.119-.618,3.67-.708-.508-2.629-4.13.796-.12-.618,4.857-.937,1.324,6.868-4.739.914-.119-.618,4.013-.774-.459-2.384-3.67.708Z" />
        <path d="m52.374,94.43c0-.58-.267-.985-.479-1.191-.407-.403-1.08-.552-1.639-.543-.57.01-1.147.17-1.471.495-.226.224-.38.566-.374.945.005.33.151.638.324.825.336.344,1.058.491,1.349.537l.702.118c.592.1,1.324.247,1.771.72.204.217.42.562.429,1.103.013.729-.339,1.266-.813,1.583-.612.41-1.462.444-1.742.449-1.02.018-1.605-.312-1.919-.607-.092-.089-.549-.541-.633-1.359l.739-.012c.047.409.243.755.476.961.335.295.876.396,1.386.387.15-.002.76-.032,1.165-.289.366-.236.569-.63.562-1.049-.006-.351-.16-.567-.282-.695-.284-.285-.767-.407-1.248-.489l-.662-.119c-.762-.137-1.424-.306-1.851-.698-.264-.245-.521-.642-.531-1.281s.21-1.173.574-1.519c.571-.54,1.439-.624,1.969-.633.72-.013,1.621.062,2.271.691.305.295.664.858.678,1.658l-.75.013Z" />
        <path d="m42.983,98.753l.94-6.932.733.099-.94,6.933-.733-.1Z" />
        <path d="m34,93.083l1.019-3.44.594.176-.349,1.179.019.006c.29-.311.698-.596,1.082-.732.604-.207,1.195-.095,1.675.048.786.232,1.468.602,1.889,1.435.172.333.606,1.368.104,3.064-.406,1.37-1.139,2.122-1.748,2.452-.459.25-1.292.493-2.509.133-.978-.29-1.523-.806-1.785-1.259-.262-.452-.366-1.088-.272-1.686l.709.21c-.065.43.009.848.165,1.133.24.457.749.816,1.372,1.001.939.277,1.574.069,1.927-.139.869-.503,1.27-1.646,1.397-2.077.29-.978.237-1.89-.085-2.526-.228-.464-.661-.937-1.456-1.172-.719-.213-1.292-.07-1.675.13-.653.338-1.049,1.044-1.231,1.657l2.089.618-.179.604-2.75-.814Z" />
        <path d="m31.605,88.104l.65.354-3.343,6.152-.747-.406-.641-7.054-2.813,5.177-.65-.354,3.343-6.152.738.401.65,7.059,2.813-5.177Z" />
        <path d="m18.78,84.123l.401-.485,2.882,2.386,1.709-2.065-3.244-2.686.402-.485,3.814,3.157-4.465,5.395-3.722-3.081.402-.485,3.152,2.608,1.55-1.872-2.882-2.386Z" />
        <path d="m13.722,83.413l-1.898-2.284c-.493-.592-.836-1.1-.761-1.76.038-.33.193-.785.693-1.2.346-.288.733-.479,1.222-.47.403.016.703.157.896.295l.015-.013c-.149-.305-.139-.573-.128-.687.042-.528.411-.835.75-1.131l.595-.521c.178-.161.439-.378.573-.827l.512.615c-.04.124-.135.385-.553.758l-.55.496c-.356.322-.655.558-.661,1.005-.001.404.258.748.424.948l1.413,1.699,2.369-1.969.473.568-5.383,4.476Zm2.057-2.672l-1.381-1.661c-.294-.354-.693-.646-1.058-.694-.316-.036-.719.09-1.049.365-.377.313-.485.637-.485.871-.016.481.361.936.572,1.189l1.355,1.63,2.045-1.7Z" />
        <path d="m7.43,69.139c-.209-.466-.009-.995.457-1.204s.995-.009,1.204.457c.209.465.008.994-.457,1.204-.465.209-.995.008-1.204-.457Z" />
        <path d="m1.327,57.567c-.106-.712-.166-1.583.417-2.418.393-.554,1.152-1.153,2.536-1.36,1.266-.189,2.274.064,2.896.567.727.599.968,1.473,1.088,2.273l.348,2.323-6.921,1.036-.363-2.422Zm6.552.748l-.206-1.375c-.087-.583-.226-1.441-.955-1.989-.546-.404-1.394-.53-2.303-.394-.949.142-1.7.527-2.111,1.094-.461.636-.431,1.309-.353,1.832l.252,1.682,5.675-.85Z" />
        <path d="m3.942,45.725l.629.026-.154,3.738,2.679.11.173-4.208.629.026-.204,4.947-6.996-.289.199-4.827.63.026-.169,4.088,2.429.1.154-3.738Z" />
        <path d="m2.354,37.303l.174-.791,6.305,3.918-.196.889-7.367.906.174-.791,6.55-.728-5.64-3.403Z" />
        <path d="m8.245,30.082l.582.242-1.438,3.453,2.474,1.03,1.619-3.886.582.242-1.904,4.57-6.462-2.692,1.857-4.459.582.243-1.573,3.775,2.243.935,1.438-3.453Z" />
        <path d="m15.704,25.173l-2.346,3.703-5.917-3.749.396-.625,5.385,3.412,1.95-3.077.532.337Z" />
        <path d="m12.616,18.81c-.021-.495.098-1.335.902-2.212.757-.826,1.546-1.079,2.117-1.125.656-.049,1.689.111,2.861,1.186,1.135,1.041,1.435,2.076,1.449,2.74.034.954-.459,1.669-.925,2.178-.804.877-1.572,1.122-2.159,1.155-.282.012-1.464.014-2.813-1.223-1.024-.94-1.401-1.95-1.433-2.699Zm4.271,3.185c.488-.014,1.115-.239,1.663-.836.575-.626.682-1.247.662-1.713-.035-.657-.373-1.414-1.228-2.198-.98-.899-1.86-1.109-2.48-1.054-.677.058-1.15.425-1.495.801-.574.626-.676,1.211-.682,1.586,0,.637.327,1.508,1.278,2.38.759.696,1.582,1.057,2.281,1.034Z" />
        <path d="m21.459,9.855c.413-.3,1.031-.724,1.773-.621.357.049.828.238,1.269.845.452.623.512,1.147.461,1.519-.115.812-.758,1.304-1.187,1.616l-1.521,1.104,1.715,2.361-.598.435-4.112-5.661,2.2-1.598Zm.425,3.953l1.48-1.075c.332-.241.743-.576.844-1.083.059-.277.018-.656-.299-1.092-.299-.413-.643-.545-.88-.583-.519-.068-1.014.255-1.321.478l-1.48,1.075,1.657,2.281Z" />
        <path d="m32.182,7.307l.272.568-3.373,1.615,1.157,2.417,3.796-1.818.272.568-4.464,2.137-3.022-6.312,4.355-2.085.272.568-3.688,1.766,1.049,2.191,3.373-1.615Z" />
        <path d="m34.97,3.012l2.873-.757c.745-.196,1.35-.293,1.917.054.284.173.63.506.796,1.135.115.435.125.867-.09,1.307-.185.359-.439.571-.646.688l.005.02c.34-.007.579.116.677.173.462.261.584.726.708,1.158l.221.759c.071.229.158.559.508.87l-.774.204c-.096-.088-.292-.285-.454-.822l-.218-.708c-.142-.459-.229-.83-.632-1.023-.366-.172-.787-.083-1.039-.016l-2.138.563.785,2.98-.716.188-1.784-6.772Zm1.554,2.994l2.089-.55c.445-.117.879-.355,1.076-.667.167-.271.222-.689.112-1.105-.125-.474-.373-.708-.585-.808-.43-.218-1-.067-1.32.017l-2.051.54.678,2.573Z" />
        <path d="m46.264,3.485c.508-.041.938.326.979.834s-.326.938-.834.979-.938-.327-.979-.834c-.041-.508.327-.938.834-.979Z" />
      </g>
    </svg>
  );
};

export default RotatingText;
