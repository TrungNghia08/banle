function Home(){
    return(
        <>
 <div className="mt-12">
  <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-6 h-6 text-white"
        >
          <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
          <path
            fillRule="evenodd"
            d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
            clipRule="evenodd"
          />
          <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          Today's Money
        </p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          $53k
        </h4>
      </div>
      <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-green-500">+55%</strong>&nbsp;than last week
        </p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-6 h-6 text-white"
        >
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          Today's Users
        </p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          2,300
        </h4>
      </div>
      <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-green-500">+3%</strong>&nbsp;than last month
        </p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-6 h-6 text-white"
        >
          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          New Clients
        </p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          3,462
        </h4>
      </div>
      <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
        </p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 absolute grid h-12 w-12 place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-6 h-6 text-white"
        >
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
        </svg>
      </div>
      <div className="p-4 text-right">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          Sales
        </p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          $103,430
        </h4>
      </div>
      <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
        </p>
      </div>
    </div>
  </div>
  <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700">
        <div
          type="bar"
          height={220}
          series="[object Object]"
          options="[object Object]"
          width="100%"
          style={{ minHeight: 235 }}
        >
          <div
            id="apexchartsf9xm2kmz"
            className="apexcharts-canvas apexchartsf9xm2kmz apexcharts-theme-light"
            style={{ width: 254, height: 220 }}
          >
            <svg
              id="SvgjsSvg1339"
              width={254}
              height={220}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev"
              className="apexcharts-svg"
              xmlns:data="ApexChartsNS"
              transform="translate(0, 0)"
              style={{ background: "transparent" }}
            >
              <foreignObject x={0} y={0} width={254} height={220}>
                <div
                  className="apexcharts-legend"
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{ maxHeight: 110 }}
                />
              </foreignObject>
              <g
                id="SvgjsG1415"
                className="apexcharts-yaxis"
                rel={0}
                transform="translate(11.633138656616211, 0)"
              >
                <g id="SvgjsG1416" className="apexcharts-yaxis-texts-g">
                  <text
                    id="SvgjsText1418"
                    fontFamily="inherit"
                    x={20}
                    y="36.5"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1419">50</tspan>
                    <title>50</title>
                  </text>
                  <text
                    id="SvgjsText1421"
                    fontFamily="inherit"
                    x={20}
                    y="65.753866563797"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1422">40</tspan>
                    <title>40</title>
                  </text>
                  <text
                    id="SvgjsText1424"
                    fontFamily="inherit"
                    x={20}
                    y="95.00773312759401"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1425">30</tspan>
                    <title>30</title>
                  </text>
                  <text
                    id="SvgjsText1427"
                    fontFamily="inherit"
                    x={20}
                    y="124.26159969139101"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1428">20</tspan>
                    <title>20</title>
                  </text>
                  <text
                    id="SvgjsText1430"
                    fontFamily="inherit"
                    x={20}
                    y="153.51546625518802"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1431">10</tspan>
                    <title>10</title>
                  </text>
                  <text
                    id="SvgjsText1433"
                    fontFamily="inherit"
                    x={20}
                    y="182.76933281898502"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1434">0</tspan>
                    <title>0</title>
                  </text>
                </g>
              </g>
              <g
                id="SvgjsG1341"
                className="apexcharts-inner apexcharts-graphical"
                transform="translate(41.63313865661621, 35)"
              >
                <defs id="SvgjsDefs1340">
                  <linearGradient
                    id="SvgjsLinearGradient1344"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={1}
                  >
                    <stop
                      id="SvgjsStop1345"
                      stopOpacity="0.4"
                      stopColor="rgba(216,227,240,0.4)"
                      offset={0}
                    />
                    <stop
                      id="SvgjsStop1346"
                      stopOpacity="0.5"
                      stopColor="rgba(190,209,230,0.5)"
                      offset={1}
                    />
                    <stop
                      id="SvgjsStop1347"
                      stopOpacity="0.5"
                      stopColor="rgba(190,209,230,0.5)"
                      offset={1}
                    />
                  </linearGradient>
                  <clipPath id="gridRectMaskf9xm2kmz">
                    <rect
                      id="SvgjsRect1349"
                      width="196.3668613433838"
                      height="150.269332818985"
                      x={-2}
                      y={-2}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="forecastMaskf9xm2kmz" />
                  <clipPath id="nonForecastMaskf9xm2kmz" />
                  <clipPath id="gridRectMarkerMaskf9xm2kmz">
                    <rect
                      id="SvgjsRect1350"
                      width="196.3668613433838"
                      height="150.269332818985"
                      x={-2}
                      y={-2}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="SvgjsRect1348"
                  width="4.396956830705915"
                  height="146.269332818985"
                  x={0}
                  y={0}
                  rx={0}
                  ry={0}
                  opacity={1}
                  strokeWidth={0}
                  strokeDasharray={3}
                  fill="url(#SvgjsLinearGradient1344)"
                  className="apexcharts-xcrosshairs"
                  y2="146.269332818985"
                  filter="none"
                  fillOpacity="0.9"
                />
                <g id="SvgjsG1370" className="apexcharts-grid">
                  <g
                    id="SvgjsG1371"
                    className="apexcharts-gridlines-horizontal"
                  >
                    <line
                      id="SvgjsLine1383"
                      x1={0}
                      y1="29.253866563796997"
                      x2="192.3668613433838"
                      y2="29.253866563796997"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1384"
                      x1={0}
                      y1="58.507733127593994"
                      x2="192.3668613433838"
                      y2="58.507733127593994"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1385"
                      x1={0}
                      y1="87.76159969139098"
                      x2="192.3668613433838"
                      y2="87.76159969139098"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1386"
                      x1={0}
                      y1="117.01546625518799"
                      x2="192.3668613433838"
                      y2="117.01546625518799"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <g id="SvgjsG1372" className="apexcharts-gridlines-vertical">
                    <line
                      id="SvgjsLine1374"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1375"
                      x1="27.48098019191197"
                      y1={0}
                      x2="27.48098019191197"
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1376"
                      x1="54.96196038382394"
                      y1={0}
                      x2="54.96196038382394"
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1377"
                      x1="82.44294057573592"
                      y1={0}
                      x2="82.44294057573592"
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1378"
                      x1="109.92392076764789"
                      y1={0}
                      x2="109.92392076764789"
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1379"
                      x1="137.40490095955985"
                      y1={0}
                      x2="137.40490095955985"
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1380"
                      x1="164.88588115147184"
                      y1={0}
                      x2="164.88588115147184"
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1381"
                      x1="192.36686134338382"
                      y1={0}
                      x2="192.36686134338382"
                      y2="146.269332818985"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <line
                    id="SvgjsLine1389"
                    x1={0}
                    y1="146.269332818985"
                    x2="192.3668613433838"
                    y2="146.269332818985"
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                  <line
                    id="SvgjsLine1388"
                    x1={0}
                    y1={1}
                    x2={0}
                    y2="146.269332818985"
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                </g>
                <g id="SvgjsG1373" className="apexcharts-grid-borders">
                  <line
                    id="SvgjsLine1382"
                    x1={0}
                    y1={0}
                    x2="192.3668613433838"
                    y2={0}
                    stroke="#dddddd"
                    strokeDasharray={5}
                    strokeLinecap="butt"
                    className="apexcharts-gridline"
                  />
                  <line
                    id="SvgjsLine1387"
                    x1={0}
                    y1="146.269332818985"
                    x2="192.3668613433838"
                    y2="146.269332818985"
                    stroke="#dddddd"
                    strokeDasharray={5}
                    strokeLinecap="butt"
                    className="apexcharts-gridline"
                  />
                </g>
                <g
                  id="SvgjsG1351"
                  className="apexcharts-bar-series apexcharts-plot-series"
                >
                  <g
                    id="SvgjsG1352"
                    className="apexcharts-series"
                    rel={1}
                    seriesname="Views"
                    data:realindex={0}
                  >
                    <path
                      id="SvgjsPath1357"
                      d="M 11.542011680603029 141.270332818985 L 11.542011680603029 5.001 C 11.542011680603029 2.5010000000000003 13.740490095955986 0.001 15.938968511308943 0.001 L 15.938968511308943 0.001 C 15.938968511308943 0.001 15.938968511308943 2.501 15.938968511308943 5.001 L 15.938968511308943 141.270332818985 C 15.938968511308943 143.770332818985 13.740490095955986 146.270332818985 11.542011680603029 146.270332818985 L 11.542011680603029 146.270332818985 C 11.542011680603029 146.270332818985 11.542011680603029 143.770332818985 11.542011680603029 141.270332818985 Z "
                      fill="rgba(56,142,60,0.8)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-bar-area"
                      index={0}
                      clipPath="url(#gridRectMaskf9xm2kmz)"
                      pathto="M 11.542011680603029 141.270332818985 L 11.542011680603029 5.001 C 11.542011680603029 2.5010000000000003 13.740490095955986 0.001 15.938968511308943 0.001 L 15.938968511308943 0.001 C 15.938968511308943 0.001 15.938968511308943 2.501 15.938968511308943 5.001 L 15.938968511308943 141.270332818985 C 15.938968511308943 143.770332818985 13.740490095955986 146.270332818985 11.542011680603029 146.270332818985 L 11.542011680603029 146.270332818985 C 11.542011680603029 146.270332818985 11.542011680603029 143.770332818985 11.542011680603029 141.270332818985 Z "
                      pathfrom="M 11.542011680603029 146.270332818985 L 11.542011680603029 146.270332818985 L 15.938968511308943 146.270332818985 L 15.938968511308943 146.270332818985 L 15.938968511308943 146.270332818985 L 15.938968511308943 146.270332818985 L 15.938968511308943 146.270332818985 L 11.542011680603029 146.270332818985 Z"
                      cy={0}
                      cx="39.022991872515"
                      j={0}
                      val={50}
                      barheight="146.269332818985"
                      barwidth="4.396956830705915"
                    />
                    <path
                      id="SvgjsPath1359"
                      d="M 39.022991872515 141.270332818985 L 39.022991872515 92.76259969139099 C 39.022991872515 90.26259969139099 41.22147028786796 87.76259969139099 43.41994870322092 87.76259969139099 L 43.41994870322092 87.76259969139099 C 43.41994870322092 87.76259969139099 43.41994870322092 90.26259969139099 43.41994870322092 92.76259969139099 L 43.41994870322092 141.270332818985 C 43.41994870322092 143.770332818985 41.22147028786796 146.270332818985 39.022991872515 146.270332818985 L 39.022991872515 146.270332818985 C 39.022991872515 146.270332818985 39.022991872515 143.770332818985 39.022991872515 141.270332818985 Z "
                      fill="rgba(56,142,60,0.8)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-bar-area"
                      index={0}
                      clipPath="url(#gridRectMaskf9xm2kmz)"
                      pathto="M 39.022991872515 141.270332818985 L 39.022991872515 92.76259969139099 C 39.022991872515 90.26259969139099 41.22147028786796 87.76259969139099 43.41994870322092 87.76259969139099 L 43.41994870322092 87.76259969139099 C 43.41994870322092 87.76259969139099 43.41994870322092 90.26259969139099 43.41994870322092 92.76259969139099 L 43.41994870322092 141.270332818985 C 43.41994870322092 143.770332818985 41.22147028786796 146.270332818985 39.022991872515 146.270332818985 L 39.022991872515 146.270332818985 C 39.022991872515 146.270332818985 39.022991872515 143.770332818985 39.022991872515 141.270332818985 Z "
                      pathfrom="M 39.022991872515 146.270332818985 L 39.022991872515 146.270332818985 L 43.41994870322092 146.270332818985 L 43.41994870322092 146.270332818985 L 43.41994870322092 146.270332818985 L 43.41994870322092 146.270332818985 L 43.41994870322092 146.270332818985 L 39.022991872515 146.270332818985 Z"
                      cy="87.76159969139098"
                      cx="66.50397206442697"
                      j={1}
                      val={20}
                      barheight="58.507733127594"
                      barwidth="4.396956830705915"
                    />
                    <path
                      id="SvgjsPath1361"
                      d="M 66.50397206442697 141.270332818985 L 66.50397206442697 122.01646625518799 C 66.50397206442697 119.51646625518799 68.70245047977994 117.01646625518799 70.90092889513289 117.01646625518799 L 70.90092889513289 117.01646625518799 C 70.90092889513289 117.01646625518799 70.90092889513289 119.51646625518799 70.90092889513289 122.01646625518799 L 70.90092889513289 141.270332818985 C 70.90092889513289 143.770332818985 68.70245047977994 146.270332818985 66.50397206442697 146.270332818985 L 66.50397206442697 146.270332818985 C 66.50397206442697 146.270332818985 66.50397206442697 143.770332818985 66.50397206442697 141.270332818985 Z "
                      fill="rgba(56,142,60,0.8)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-bar-area"
                      index={0}
                      clipPath="url(#gridRectMaskf9xm2kmz)"
                      pathto="M 66.50397206442697 141.270332818985 L 66.50397206442697 122.01646625518799 C 66.50397206442697 119.51646625518799 68.70245047977994 117.01646625518799 70.90092889513289 117.01646625518799 L 70.90092889513289 117.01646625518799 C 70.90092889513289 117.01646625518799 70.90092889513289 119.51646625518799 70.90092889513289 122.01646625518799 L 70.90092889513289 141.270332818985 C 70.90092889513289 143.770332818985 68.70245047977994 146.270332818985 66.50397206442697 146.270332818985 L 66.50397206442697 146.270332818985 C 66.50397206442697 146.270332818985 66.50397206442697 143.770332818985 66.50397206442697 141.270332818985 Z "
                      pathfrom="M 66.50397206442697 146.270332818985 L 66.50397206442697 146.270332818985 L 70.90092889513289 146.270332818985 L 70.90092889513289 146.270332818985 L 70.90092889513289 146.270332818985 L 70.90092889513289 146.270332818985 L 70.90092889513289 146.270332818985 L 66.50397206442697 146.270332818985 Z"
                      cy="117.01546625518799"
                      cx="93.98495225633894"
                      j={2}
                      val={10}
                      barheight="29.253866563797"
                      barwidth="4.396956830705915"
                    />
                    <path
                      id="SvgjsPath1363"
                      d="M 93.98495225633894 141.270332818985 L 93.98495225633894 86.9118263786316 C 93.98495225633894 84.4118263786316 96.1834306716919 81.9118263786316 98.38190908704486 81.9118263786316 L 98.38190908704486 81.9118263786316 C 98.38190908704486 81.9118263786316 98.38190908704486 84.4118263786316 98.38190908704486 86.9118263786316 L 98.38190908704486 141.270332818985 C 98.38190908704486 143.770332818985 96.1834306716919 146.270332818985 93.98495225633894 146.270332818985 L 93.98495225633894 146.270332818985 C 93.98495225633894 146.270332818985 93.98495225633894 143.770332818985 93.98495225633894 141.270332818985 Z "
                      fill="rgba(56,142,60,0.8)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-bar-area"
                      index={0}
                      clipPath="url(#gridRectMaskf9xm2kmz)"
                      pathto="M 93.98495225633894 141.270332818985 L 93.98495225633894 86.9118263786316 C 93.98495225633894 84.4118263786316 96.1834306716919 81.9118263786316 98.38190908704486 81.9118263786316 L 98.38190908704486 81.9118263786316 C 98.38190908704486 81.9118263786316 98.38190908704486 84.4118263786316 98.38190908704486 86.9118263786316 L 98.38190908704486 141.270332818985 C 98.38190908704486 143.770332818985 96.1834306716919 146.270332818985 93.98495225633894 146.270332818985 L 93.98495225633894 146.270332818985 C 93.98495225633894 146.270332818985 93.98495225633894 143.770332818985 93.98495225633894 141.270332818985 Z "
                      pathfrom="M 93.98495225633894 146.270332818985 L 93.98495225633894 146.270332818985 L 98.38190908704486 146.270332818985 L 98.38190908704486 146.270332818985 L 98.38190908704486 146.270332818985 L 98.38190908704486 146.270332818985 L 98.38190908704486 146.270332818985 L 93.98495225633894 146.270332818985 Z"
                      cy="81.9108263786316"
                      cx="121.46593244825091"
                      j={3}
                      val={22}
                      barheight="64.3585064403534"
                      barwidth="4.396956830705915"
                    />
                    <path
                      id="SvgjsPath1365"
                      d="M 121.46593244825091 141.270332818985 L 121.46593244825091 5.001 C 121.46593244825091 2.5010000000000003 123.66441086360388 0.001 125.86288927895683 0.001 L 125.86288927895683 0.001 C 125.86288927895683 0.001 125.86288927895683 2.501 125.86288927895683 5.001 L 125.86288927895683 141.270332818985 C 125.86288927895683 143.770332818985 123.66441086360388 146.270332818985 121.46593244825091 146.270332818985 L 121.46593244825091 146.270332818985 C 121.46593244825091 146.270332818985 121.46593244825091 143.770332818985 121.46593244825091 141.270332818985 Z "
                      fill="rgba(56,142,60,0.8)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-bar-area"
                      index={0}
                      clipPath="url(#gridRectMaskf9xm2kmz)"
                      pathto="M 121.46593244825091 141.270332818985 L 121.46593244825091 5.001 C 121.46593244825091 2.5010000000000003 123.66441086360388 0.001 125.86288927895683 0.001 L 125.86288927895683 0.001 C 125.86288927895683 0.001 125.86288927895683 2.501 125.86288927895683 5.001 L 125.86288927895683 141.270332818985 C 125.86288927895683 143.770332818985 123.66441086360388 146.270332818985 121.46593244825091 146.270332818985 L 121.46593244825091 146.270332818985 C 121.46593244825091 146.270332818985 121.46593244825091 143.770332818985 121.46593244825091 141.270332818985 Z "
                      pathfrom="M 121.46593244825091 146.270332818985 L 121.46593244825091 146.270332818985 L 125.86288927895683 146.270332818985 L 125.86288927895683 146.270332818985 L 125.86288927895683 146.270332818985 L 125.86288927895683 146.270332818985 L 125.86288927895683 146.270332818985 L 121.46593244825091 146.270332818985 Z"
                      cy={0}
                      cx="148.94691264016288"
                      j={4}
                      val={50}
                      barheight="146.269332818985"
                      barwidth="4.396956830705915"
                    />
                    <path
                      id="SvgjsPath1367"
                      d="M 148.94691264016288 141.270332818985 L 148.94691264016288 122.01646625518799 C 148.94691264016288 119.51646625518799 151.14539105551583 117.01646625518799 153.34386947086878 117.01646625518799 L 153.34386947086878 117.01646625518799 C 153.34386947086878 117.01646625518799 153.34386947086878 119.51646625518799 153.34386947086878 122.01646625518799 L 153.34386947086878 141.270332818985 C 153.34386947086878 143.770332818985 151.14539105551583 146.270332818985 148.94691264016288 146.270332818985 L 148.94691264016288 146.270332818985 C 148.94691264016288 146.270332818985 148.94691264016288 143.770332818985 148.94691264016288 141.270332818985 Z "
                      fill="rgba(56,142,60,0.8)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-bar-area"
                      index={0}
                      clipPath="url(#gridRectMaskf9xm2kmz)"
                      pathto="M 148.94691264016288 141.270332818985 L 148.94691264016288 122.01646625518799 C 148.94691264016288 119.51646625518799 151.14539105551583 117.01646625518799 153.34386947086878 117.01646625518799 L 153.34386947086878 117.01646625518799 C 153.34386947086878 117.01646625518799 153.34386947086878 119.51646625518799 153.34386947086878 122.01646625518799 L 153.34386947086878 141.270332818985 C 153.34386947086878 143.770332818985 151.14539105551583 146.270332818985 148.94691264016288 146.270332818985 L 148.94691264016288 146.270332818985 C 148.94691264016288 146.270332818985 148.94691264016288 143.770332818985 148.94691264016288 141.270332818985 Z "
                      pathfrom="M 148.94691264016288 146.270332818985 L 148.94691264016288 146.270332818985 L 153.34386947086878 146.270332818985 L 153.34386947086878 146.270332818985 L 153.34386947086878 146.270332818985 L 153.34386947086878 146.270332818985 L 153.34386947086878 146.270332818985 L 148.94691264016288 146.270332818985 Z"
                      cy="117.01546625518799"
                      cx="176.42789283207486"
                      j={5}
                      val={10}
                      barheight="29.253866563797"
                      barwidth="4.396956830705915"
                    />
                    <path
                      id="SvgjsPath1369"
                      d="M 176.42789283207486 141.270332818985 L 176.42789283207486 34.254866563796995 C 176.42789283207486 31.754866563796995 178.6263712474278 29.25486656379699 180.82484966278076 29.25486656379699 L 180.82484966278076 29.25486656379699 C 180.82484966278076 29.25486656379699 180.82484966278076 31.754866563796995 180.82484966278076 34.254866563796995 L 180.82484966278076 141.270332818985 C 180.82484966278076 143.770332818985 178.6263712474278 146.270332818985 176.42789283207486 146.270332818985 L 176.42789283207486 146.270332818985 C 176.42789283207486 146.270332818985 176.42789283207486 143.770332818985 176.42789283207486 141.270332818985 Z "
                      fill="rgba(56,142,60,0.8)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={0}
                      strokeDasharray={0}
                      className="apexcharts-bar-area"
                      index={0}
                      clipPath="url(#gridRectMaskf9xm2kmz)"
                      pathto="M 176.42789283207486 141.270332818985 L 176.42789283207486 34.254866563796995 C 176.42789283207486 31.754866563796995 178.6263712474278 29.25486656379699 180.82484966278076 29.25486656379699 L 180.82484966278076 29.25486656379699 C 180.82484966278076 29.25486656379699 180.82484966278076 31.754866563796995 180.82484966278076 34.254866563796995 L 180.82484966278076 141.270332818985 C 180.82484966278076 143.770332818985 178.6263712474278 146.270332818985 176.42789283207486 146.270332818985 L 176.42789283207486 146.270332818985 C 176.42789283207486 146.270332818985 176.42789283207486 143.770332818985 176.42789283207486 141.270332818985 Z "
                      pathfrom="M 176.42789283207486 146.270332818985 L 176.42789283207486 146.270332818985 L 180.82484966278076 146.270332818985 L 180.82484966278076 146.270332818985 L 180.82484966278076 146.270332818985 L 180.82484966278076 146.270332818985 L 180.82484966278076 146.270332818985 L 176.42789283207486 146.270332818985 Z"
                      cy="29.25386656379699"
                      cx="203.90887302398684"
                      j={6}
                      val={40}
                      barheight="117.015466255188"
                      barwidth="4.396956830705915"
                    />
                    <g id="SvgjsG1354" className="apexcharts-bar-goals-markers">
                      <g
                        id="SvgjsG1356"
                        classname="apexcharts-bar-goals-groups"
                        className="apexcharts-hidden-element-shown"
                        clipPath="url(#gridRectMarkerMaskf9xm2kmz)"
                      />
                      <g
                        id="SvgjsG1358"
                        classname="apexcharts-bar-goals-groups"
                        className="apexcharts-hidden-element-shown"
                        clipPath="url(#gridRectMarkerMaskf9xm2kmz)"
                      />
                      <g
                        id="SvgjsG1360"
                        classname="apexcharts-bar-goals-groups"
                        className="apexcharts-hidden-element-shown"
                        clipPath="url(#gridRectMarkerMaskf9xm2kmz)"
                      />
                      <g
                        id="SvgjsG1362"
                        classname="apexcharts-bar-goals-groups"
                        className="apexcharts-hidden-element-shown"
                        clipPath="url(#gridRectMarkerMaskf9xm2kmz)"
                      />
                      <g
                        id="SvgjsG1364"
                        classname="apexcharts-bar-goals-groups"
                        className="apexcharts-hidden-element-shown"
                        clipPath="url(#gridRectMarkerMaskf9xm2kmz)"
                      />
                      <g
                        id="SvgjsG1366"
                        classname="apexcharts-bar-goals-groups"
                        className="apexcharts-hidden-element-shown"
                        clipPath="url(#gridRectMarkerMaskf9xm2kmz)"
                      />
                      <g
                        id="SvgjsG1368"
                        classname="apexcharts-bar-goals-groups"
                        className="apexcharts-hidden-element-shown"
                        clipPath="url(#gridRectMarkerMaskf9xm2kmz)"
                      />
                    </g>
                    <g
                      id="SvgjsG1355"
                      className="apexcharts-bar-shadows apexcharts-hidden-element-shown"
                    />
                  </g>
                  <g
                    id="SvgjsG1353"
                    className="apexcharts-datalabels apexcharts-hidden-element-shown"
                    data:realindex={0}
                  />
                </g>
                <line
                  id="SvgjsLine1390"
                  x1={0}
                  y1={0}
                  x2="192.3668613433838"
                  y2={0}
                  stroke="#b6b6b6"
                  strokeDasharray={0}
                  strokeWidth={1}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs"
                />
                <line
                  id="SvgjsLine1391"
                  x1={0}
                  y1={0}
                  x2="192.3668613433838"
                  y2={0}
                  strokeDasharray={0}
                  strokeWidth={0}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs-hidden"
                />
                <g
                  id="SvgjsG1392"
                  className="apexcharts-xaxis"
                  transform="translate(0, 0)"
                >
                  <g
                    id="SvgjsG1393"
                    className="apexcharts-xaxis-texts-g"
                    transform="translate(0, -4)"
                  >
                    <text
                      id="SvgjsText1395"
                      fontFamily="inherit"
                      x="13.740490095955986"
                      y="175.269332818985"
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                    >
                      <tspan id="SvgjsTspan1396">M</tspan>
                      <title>M</title>
                    </text>
                    <text
                      id="SvgjsText1398"
                      fontFamily="inherit"
                      x="41.22147028786796"
                      y="175.269332818985"
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                    >
                      <tspan id="SvgjsTspan1399">T</tspan>
                      <title>T</title>
                    </text>
                    <text
                      id="SvgjsText1401"
                      fontFamily="inherit"
                      x="68.70245047977993"
                      y="175.269332818985"
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                    >
                      <tspan id="SvgjsTspan1402">W</tspan>
                      <title>W</title>
                    </text>
                    <text
                      id="SvgjsText1404"
                      fontFamily="inherit"
                      x="96.1834306716919"
                      y="175.269332818985"
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                    >
                      <tspan id="SvgjsTspan1405">T</tspan>
                      <title>T</title>
                    </text>
                    <text
                      id="SvgjsText1407"
                      fontFamily="inherit"
                      x="123.66441086360386"
                      y="175.269332818985"
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                    >
                      <tspan id="SvgjsTspan1408">F</tspan>
                      <title>F</title>
                    </text>
                    <text
                      id="SvgjsText1410"
                      fontFamily="inherit"
                      x="151.14539105551586"
                      y="175.269332818985"
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                    >
                      <tspan id="SvgjsTspan1411">S</tspan>
                      <title>S</title>
                    </text>
                    <text
                      id="SvgjsText1413"
                      fontFamily="inherit"
                      x="178.62637124742784"
                      y="175.269332818985"
                      textAnchor="middle"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                    >
                      <tspan id="SvgjsTspan1414">S</tspan>
                      <title>S</title>
                    </text>
                  </g>
                </g>
                <g id="SvgjsG1435" className="apexcharts-yaxis-annotations" />
                <g id="SvgjsG1436" className="apexcharts-xaxis-annotations" />
                <g id="SvgjsG1437" className="apexcharts-point-annotations" />
              </g>
            </svg>
            <div className="apexcharts-tooltip apexcharts-theme-dark">
              <div
                className="apexcharts-tooltip-title"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 12
                }}
              />
              <div
                className="apexcharts-tooltip-series-group"
                style={{ order: 1 }}
              >
                <span className="apexcharts-tooltip-marker" />
                <div
                  className="apexcharts-tooltip-text"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 12
                  }}
                >
                  <div className="apexcharts-tooltip-y-group">
                    <span className="apexcharts-tooltip-text-y-label" />
                    <span className="apexcharts-tooltip-text-y-value" />
                  </div>
                  <div className="apexcharts-tooltip-goals-group">
                    <span className="apexcharts-tooltip-text-goals-label" />
                    <span className="apexcharts-tooltip-text-goals-value" />
                  </div>
                  <div className="apexcharts-tooltip-z-group">
                    <span className="apexcharts-tooltip-text-z-label" />
                    <span className="apexcharts-tooltip-text-z-value" />
                  </div>
                </div>
              </div>
            </div>
            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
              <div className="apexcharts-yaxistooltip-text" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 px-6 pt-0">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
          Website View
        </h6>
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          Last Campaign Performance
        </p>
      </div>
      <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
        <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            strokeWidth={2}
            className="h-4 w-4 text-blue-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
          &nbsp;campaign sent 2 days ago
        </p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700">
        <div
          type="line"
          height={220}
          series="[object Object]"
          options="[object Object]"
          width="100%"
          style={{ minHeight: 235 }}
        >
          <div
            id="apexcharts4u2yu3p6"
            className="apexcharts-canvas apexcharts4u2yu3p6 apexcharts-theme-light"
            style={{ width: 254, height: 220 }}
          >
            <svg
              id="SvgjsSvg1438"
              width={254}
              height={220}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev"
              className="apexcharts-svg apexcharts-zoomable"
              xmlns:data="ApexChartsNS"
              transform="translate(0, 0)"
              style={{ background: "transparent" }}
            >
              <foreignObject x={0} y={0} width={254} height={220}>
                <div
                  className="apexcharts-legend"
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{ maxHeight: 110 }}
                />
              </foreignObject>
              <rect
                id="SvgjsRect1444"
                width={0}
                height={0}
                x={0}
                y={0}
                rx={0}
                ry={0}
                opacity={1}
                strokeWidth={0}
                stroke="none"
                strokeDasharray={0}
                fill="#fefefe"
              />
              <g
                id="SvgjsG1523"
                className="apexcharts-yaxis"
                rel={0}
                transform="translate(18.93294334411621, 0)"
              >
                <g id="SvgjsG1524" className="apexcharts-yaxis-texts-g">
                  <text
                    id="SvgjsText1526"
                    fontFamily="inherit"
                    x={20}
                    y="36.6"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1527">600</tspan>
                    <title>600</title>
                  </text>
                  <text
                    id="SvgjsText1529"
                    fontFamily="inherit"
                    x={20}
                    y="57.174600219726564"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1530">500</tspan>
                    <title>500</title>
                  </text>
                  <text
                    id="SvgjsText1532"
                    fontFamily="inherit"
                    x={20}
                    y="77.74920043945312"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1533">400</tspan>
                    <title>400</title>
                  </text>
                  <text
                    id="SvgjsText1535"
                    fontFamily="inherit"
                    x={20}
                    y="98.32380065917968"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1536">300</tspan>
                    <title>300</title>
                  </text>
                  <text
                    id="SvgjsText1538"
                    fontFamily="inherit"
                    x={20}
                    y="118.89840087890624"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1539">200</tspan>
                    <title>200</title>
                  </text>
                  <text
                    id="SvgjsText1541"
                    fontFamily="inherit"
                    x={20}
                    y="139.4730010986328"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1542">100</tspan>
                    <title>100</title>
                  </text>
                  <text
                    id="SvgjsText1544"
                    fontFamily="inherit"
                    x={20}
                    y="160.04760131835937"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1545">0</tspan>
                    <title>0</title>
                  </text>
                </g>
              </g>
              <g
                id="SvgjsG1440"
                className="apexcharts-inner apexcharts-graphical"
                transform="translate(48.93294334411621, 35)"
              >
                <defs id="SvgjsDefs1439">
                  <clipPath id="gridRectMask4u2yu3p6">
                    <rect
                      id="SvgjsRect1446"
                      width="194.0670566558838"
                      height="147.44760131835938"
                      x={-7}
                      y={-12}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="forecastMask4u2yu3p6" />
                  <clipPath id="nonForecastMask4u2yu3p6" />
                  <clipPath id="gridRectMarkerMask4u2yu3p6">
                    <rect
                      id="SvgjsRect1447"
                      width="237.0670566558838"
                      height="175.44760131835938"
                      x={-26}
                      y={-26}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <line
                  id="SvgjsLine1445"
                  x1={0}
                  y1={0}
                  x2={0}
                  y2="123.44760131835938"
                  stroke="#b6b6b6"
                  strokeDasharray={3}
                  strokeLinecap="butt"
                  className="apexcharts-xcrosshairs"
                  x={0}
                  y={0}
                  width={1}
                  height="123.44760131835938"
                  fill="#b1b9c4"
                  filter="none"
                  fillOpacity="0.9"
                  strokeWidth={1}
                />
                <g id="SvgjsG1470" className="apexcharts-grid">
                  <g
                    id="SvgjsG1471"
                    className="apexcharts-gridlines-horizontal"
                  >
                    <line
                      id="SvgjsLine1484"
                      x1={0}
                      y1="20.574600219726562"
                      x2="185.0670566558838"
                      y2="20.574600219726562"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1485"
                      x1={0}
                      y1="41.149200439453125"
                      x2="185.0670566558838"
                      y2="41.149200439453125"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1486"
                      x1={0}
                      y1="61.72380065917969"
                      x2="185.0670566558838"
                      y2="61.72380065917969"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1487"
                      x1={0}
                      y1="82.29840087890625"
                      x2="185.0670566558838"
                      y2="82.29840087890625"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1488"
                      x1={0}
                      y1="102.87300109863281"
                      x2="185.0670566558838"
                      y2="102.87300109863281"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <g id="SvgjsG1472" className="apexcharts-gridlines-vertical">
                    <line
                      id="SvgjsLine1474"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1475"
                      x1="23.133382081985474"
                      y1={0}
                      x2="23.133382081985474"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1476"
                      x1="46.26676416397095"
                      y1={0}
                      x2="46.26676416397095"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1477"
                      x1="69.40014624595642"
                      y1={0}
                      x2="69.40014624595642"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1478"
                      x1="92.5335283279419"
                      y1={0}
                      x2="92.5335283279419"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1479"
                      x1="115.66691040992737"
                      y1={0}
                      x2="115.66691040992737"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1480"
                      x1="138.80029249191284"
                      y1={0}
                      x2="138.80029249191284"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1481"
                      x1="161.93367457389832"
                      y1={0}
                      x2="161.93367457389832"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1482"
                      x1="185.0670566558838"
                      y1={0}
                      x2="185.0670566558838"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <line
                    id="SvgjsLine1491"
                    x1={0}
                    y1="123.44760131835938"
                    x2="185.0670566558838"
                    y2="123.44760131835938"
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                  <line
                    id="SvgjsLine1490"
                    x1={0}
                    y1={1}
                    x2={0}
                    y2="123.44760131835938"
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                </g>
                <g id="SvgjsG1473" className="apexcharts-grid-borders">
                  <line
                    id="SvgjsLine1483"
                    x1={0}
                    y1={0}
                    x2="185.0670566558838"
                    y2={0}
                    stroke="#dddddd"
                    strokeDasharray={5}
                    strokeLinecap="butt"
                    className="apexcharts-gridline"
                  />
                  <line
                    id="SvgjsLine1489"
                    x1={0}
                    y1="123.44760131835938"
                    x2="185.0670566558838"
                    y2="123.44760131835938"
                    stroke="#dddddd"
                    strokeDasharray={5}
                    strokeLinecap="butt"
                    className="apexcharts-gridline"
                  />
                </g>
                <g
                  id="SvgjsG1448"
                  className="apexcharts-line-series apexcharts-plot-series"
                >
                  <g
                    id="SvgjsG1449"
                    className="apexcharts-series"
                    zindex={0}
                    seriesname="Sales"
                    data:longestseries="true"
                    rel={1}
                    data:realindex={0}
                  >
                    <path
                      id="SvgjsPath1469"
                      d="M 0 113.1603012084961 L 23.133382081985474 115.21776123046875 L 46.26676416397095 61.72380065917969 L 69.40014624595642 57.60888061523437 L 92.5335283279419 20.574600219726562 L 115.66691040992737 51.436500549316406 L 138.80029249191284 82.29840087890625 L 161.93367457389832 76.12602081298829 L 185.0670566558838 20.574600219726562"
                      fill="none"
                      fillOpacity={1}
                      stroke="rgba(2,136,209,0.8)"
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={5}
                      strokeDasharray={0}
                      className="apexcharts-line"
                      index={0}
                      clipPath="url(#gridRectMask4u2yu3p6)"
                      pathto="M 0 113.1603012084961 L 23.133382081985474 115.21776123046875 L 46.26676416397095 61.72380065917969 L 69.40014624595642 57.60888061523437 L 92.5335283279419 20.574600219726562 L 115.66691040992737 51.436500549316406 L 138.80029249191284 82.29840087890625 L 161.93367457389832 76.12602081298829 L 185.0670566558838 20.574600219726562"
                      pathfrom="M -1 123.44760131835938 L -1 123.44760131835938 L 23.133382081985474 123.44760131835938 L 46.26676416397095 123.44760131835938 L 69.40014624595642 123.44760131835938 L 92.5335283279419 123.44760131835938 L 115.66691040992737 123.44760131835938 L 138.80029249191284 123.44760131835938 L 161.93367457389832 123.44760131835938 L 185.0670566558838 123.44760131835938"
                      fillRule="evenodd"
                    />
                    <g
                      id="SvgjsG1450"
                      className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                      data:realindex={0}
                    >
                      <g
                        id="SvgjsG1452"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1453"
                          r={5}
                          cx={0}
                          cy="113.1603012084961"
                          className="apexcharts-marker no-pointer-events wm9v4cswj"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={0}
                          j={0}
                          index={0}
                          default-marker-size={5}
                        />
                        <circle
                          id="SvgjsCircle1454"
                          r={5}
                          cx="23.133382081985474"
                          cy="115.21776123046875"
                          className="apexcharts-marker no-pointer-events w1wtsz2jc"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={1}
                          j={1}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1455"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1456"
                          r={5}
                          cx="46.26676416397095"
                          cy="61.72380065917969"
                          className="apexcharts-marker no-pointer-events wai1owznn"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={2}
                          j={2}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1457"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1458"
                          r={5}
                          cx="69.40014624595642"
                          cy="57.60888061523437"
                          className="apexcharts-marker no-pointer-events wjq2zaz43"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={3}
                          j={3}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1459"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1460"
                          r={5}
                          cx="92.5335283279419"
                          cy="20.574600219726562"
                          className="apexcharts-marker no-pointer-events wlflqffui"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={4}
                          j={4}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1461"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1462"
                          r={5}
                          cx="115.66691040992737"
                          cy="51.436500549316406"
                          className="apexcharts-marker no-pointer-events wo5u2wqsc"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={5}
                          j={5}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1463"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1464"
                          r={5}
                          cx="138.80029249191284"
                          cy="82.29840087890625"
                          className="apexcharts-marker no-pointer-events wsts11hxs"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={6}
                          j={6}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1465"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1466"
                          r={5}
                          cx="161.93367457389832"
                          cy="76.12602081298829"
                          className="apexcharts-marker no-pointer-events wd72mhcbv"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={7}
                          j={7}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1467"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMask4u2yu3p6)"
                      >
                        <circle
                          id="SvgjsCircle1468"
                          r={5}
                          cx="185.0670566558838"
                          cy="20.574600219726562"
                          className="apexcharts-marker no-pointer-events whi6inosw"
                          stroke="#ffffff"
                          fill="#0288d1"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={8}
                          j={8}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id="SvgjsG1451"
                    className="apexcharts-datalabels"
                    data:realindex={0}
                  />
                </g>
                <line
                  id="SvgjsLine1492"
                  x1={0}
                  y1={0}
                  x2="185.0670566558838"
                  y2={0}
                  stroke="#b6b6b6"
                  strokeDasharray={0}
                  strokeWidth={1}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs"
                />
                <line
                  id="SvgjsLine1493"
                  x1={0}
                  y1={0}
                  x2="185.0670566558838"
                  y2={0}
                  strokeDasharray={0}
                  strokeWidth={0}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs-hidden"
                />
                <g
                  id="SvgjsG1494"
                  className="apexcharts-xaxis"
                  transform="translate(0, 0)"
                >
                  <g
                    id="SvgjsG1495"
                    className="apexcharts-xaxis-texts-g"
                    transform="translate(0, -10)"
                  >
                    <text
                      id="SvgjsText1497"
                      fontFamily="inherit"
                      x={0}
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 1.14599609375 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1498">Apr</tspan>
                      <title>Apr</title>
                    </text>
                    <text
                      id="SvgjsText1500"
                      fontFamily="inherit"
                      x="23.133382081985474"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 24.373780250549316 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1501">May</tspan>
                      <title>May</title>
                    </text>
                    <text
                      id="SvgjsText1503"
                      fontFamily="inherit"
                      x="46.26676416397095"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 47.26676559448242 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1504">Jun</tspan>
                      <title>Jun</title>
                    </text>
                    <text
                      id="SvgjsText1506"
                      fontFamily="inherit"
                      x="69.40014624595642"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 70.400146484375 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1507">Jul</tspan>
                      <title>Jul</title>
                    </text>
                    <text
                      id="SvgjsText1509"
                      fontFamily="inherit"
                      x="92.5335283279419"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 93.53353118896484 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1510">Aug</tspan>
                      <title>Aug</title>
                    </text>
                    <text
                      id="SvgjsText1512"
                      fontFamily="inherit"
                      x="115.66691040992737"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 116.7288465499878 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1513">Sep</tspan>
                      <title>Sep</title>
                    </text>
                    <text
                      id="SvgjsText1515"
                      fontFamily="inherit"
                      x="138.80029249191284"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 139.80030345916748 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1516">Oct</tspan>
                      <title>Oct</title>
                    </text>
                    <text
                      id="SvgjsText1518"
                      fontFamily="inherit"
                      x="161.93367457389832"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 163.1359920501709 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1519">Nov</tspan>
                      <title>Nov</title>
                    </text>
                    <text
                      id="SvgjsText1521"
                      fontFamily="inherit"
                      x="185.0670566558838"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 186.0670576095581 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1522">Dec</tspan>
                      <title>Dec</title>
                    </text>
                  </g>
                </g>
                <g id="SvgjsG1546" className="apexcharts-yaxis-annotations" />
                <g id="SvgjsG1547" className="apexcharts-xaxis-annotations" />
                <g id="SvgjsG1548" className="apexcharts-point-annotations" />
                <rect
                  id="SvgjsRect1549"
                  width={0}
                  height={0}
                  x={0}
                  y={0}
                  rx={0}
                  ry={0}
                  opacity={1}
                  strokeWidth={0}
                  stroke="none"
                  strokeDasharray={0}
                  fill="#fefefe"
                  className="apexcharts-zoom-rect"
                />
                <rect
                  id="SvgjsRect1550"
                  width={0}
                  height={0}
                  x={0}
                  y={0}
                  rx={0}
                  ry={0}
                  opacity={1}
                  strokeWidth={0}
                  stroke="none"
                  strokeDasharray={0}
                  fill="#fefefe"
                  className="apexcharts-selection-rect"
                />
              </g>
            </svg>
            <div className="apexcharts-tooltip apexcharts-theme-dark">
              <div
                className="apexcharts-tooltip-title"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 12
                }}
              />
              <div
                className="apexcharts-tooltip-series-group"
                style={{ order: 1 }}
              >
                <span
                  className="apexcharts-tooltip-marker"
                  style={{ backgroundColor: "rgb(2, 136, 209)" }}
                />
                <div
                  className="apexcharts-tooltip-text"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 12
                  }}
                >
                  <div className="apexcharts-tooltip-y-group">
                    <span className="apexcharts-tooltip-text-y-label" />
                    <span className="apexcharts-tooltip-text-y-value" />
                  </div>
                  <div className="apexcharts-tooltip-goals-group">
                    <span className="apexcharts-tooltip-text-goals-label" />
                    <span className="apexcharts-tooltip-text-goals-value" />
                  </div>
                  <div className="apexcharts-tooltip-z-group">
                    <span className="apexcharts-tooltip-text-z-label" />
                    <span className="apexcharts-tooltip-text-z-value" />
                  </div>
                </div>
              </div>
            </div>
            <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
              <div
                className="apexcharts-xaxistooltip-text"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 12
                }}
              />
            </div>
            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
              <div className="apexcharts-yaxistooltip-text" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 px-6 pt-0">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
          Daily Sales
        </h6>
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          15% increase in today sales
        </p>
      </div>
      <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
        <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            strokeWidth={2}
            className="h-4 w-4 text-blue-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
          &nbsp;updated 4 min ago
        </p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700">
        <div
          type="line"
          height={220}
          series="[object Object]"
          options="[object Object]"
          width="100%"
          style={{ minHeight: 235 }}
        >
          <div
            id="apexchartscb550siv"
            className="apexcharts-canvas apexchartscb550siv apexcharts-theme-light"
            style={{ width: 254, height: 220 }}
          >
            <svg
              id="SvgjsSvg1551"
              width={254}
              height={220}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev"
              className="apexcharts-svg apexcharts-zoomable"
              xmlns:data="ApexChartsNS"
              transform="translate(0, 0)"
              style={{ background: "transparent" }}
            >
              <foreignObject x={0} y={0} width={254} height={220}>
                <div
                  className="apexcharts-legend"
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{ maxHeight: 110 }}
                />
              </foreignObject>
              <rect
                id="SvgjsRect1557"
                width={0}
                height={0}
                x={0}
                y={0}
                rx={0}
                ry={0}
                opacity={1}
                strokeWidth={0}
                stroke="none"
                strokeDasharray={0}
                fill="#fefefe"
              />
              <g
                id="SvgjsG1636"
                className="apexcharts-yaxis"
                rel={0}
                transform="translate(18.93294334411621, 0)"
              >
                <g id="SvgjsG1637" className="apexcharts-yaxis-texts-g">
                  <text
                    id="SvgjsText1639"
                    fontFamily="inherit"
                    x={20}
                    y="36.6"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1640">600</tspan>
                    <title>600</title>
                  </text>
                  <text
                    id="SvgjsText1642"
                    fontFamily="inherit"
                    x={20}
                    y="57.174600219726564"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1643">500</tspan>
                    <title>500</title>
                  </text>
                  <text
                    id="SvgjsText1645"
                    fontFamily="inherit"
                    x={20}
                    y="77.74920043945312"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1646">400</tspan>
                    <title>400</title>
                  </text>
                  <text
                    id="SvgjsText1648"
                    fontFamily="inherit"
                    x={20}
                    y="98.32380065917968"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1649">300</tspan>
                    <title>300</title>
                  </text>
                  <text
                    id="SvgjsText1651"
                    fontFamily="inherit"
                    x={20}
                    y="118.89840087890624"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1652">200</tspan>
                    <title>200</title>
                  </text>
                  <text
                    id="SvgjsText1654"
                    fontFamily="inherit"
                    x={20}
                    y="139.4730010986328"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1655">100</tspan>
                    <title>100</title>
                  </text>
                  <text
                    id="SvgjsText1657"
                    fontFamily="inherit"
                    x={20}
                    y="160.04760131835937"
                    textAnchor="end"
                    dominantBaseline="auto"
                    fontSize="13px"
                    fontWeight={300}
                    fill="#37474f"
                    className="apexcharts-text apexcharts-yaxis-label "
                    style={{ fontFamily: "inherit" }}
                  >
                    <tspan id="SvgjsTspan1658">0</tspan>
                    <title>0</title>
                  </text>
                </g>
              </g>
              <g
                id="SvgjsG1553"
                className="apexcharts-inner apexcharts-graphical"
                transform="translate(48.93294334411621, 35)"
              >
                <defs id="SvgjsDefs1552">
                  <clipPath id="gridRectMaskcb550siv">
                    <rect
                      id="SvgjsRect1559"
                      width="194.0670566558838"
                      height="147.44760131835938"
                      x={-7}
                      y={-12}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                  <clipPath id="forecastMaskcb550siv" />
                  <clipPath id="nonForecastMaskcb550siv" />
                  <clipPath id="gridRectMarkerMaskcb550siv">
                    <rect
                      id="SvgjsRect1560"
                      width="237.0670566558838"
                      height="175.44760131835938"
                      x={-26}
                      y={-26}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <line
                  id="SvgjsLine1558"
                  x1={0}
                  y1={0}
                  x2={0}
                  y2="123.44760131835938"
                  stroke="#b6b6b6"
                  strokeDasharray={3}
                  strokeLinecap="butt"
                  className="apexcharts-xcrosshairs"
                  x={0}
                  y={0}
                  width={1}
                  height="123.44760131835938"
                  fill="#b1b9c4"
                  filter="none"
                  fillOpacity="0.9"
                  strokeWidth={1}
                />
                <g id="SvgjsG1583" className="apexcharts-grid">
                  <g
                    id="SvgjsG1584"
                    className="apexcharts-gridlines-horizontal"
                  >
                    <line
                      id="SvgjsLine1597"
                      x1={0}
                      y1="20.574600219726562"
                      x2="185.0670566558838"
                      y2="20.574600219726562"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1598"
                      x1={0}
                      y1="41.149200439453125"
                      x2="185.0670566558838"
                      y2="41.149200439453125"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1599"
                      x1={0}
                      y1="61.72380065917969"
                      x2="185.0670566558838"
                      y2="61.72380065917969"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1600"
                      x1={0}
                      y1="82.29840087890625"
                      x2="185.0670566558838"
                      y2="82.29840087890625"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1601"
                      x1={0}
                      y1="102.87300109863281"
                      x2="185.0670566558838"
                      y2="102.87300109863281"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <g id="SvgjsG1585" className="apexcharts-gridlines-vertical">
                    <line
                      id="SvgjsLine1587"
                      x1={0}
                      y1={0}
                      x2={0}
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1588"
                      x1="23.133382081985474"
                      y1={0}
                      x2="23.133382081985474"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1589"
                      x1="46.26676416397095"
                      y1={0}
                      x2="46.26676416397095"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1590"
                      x1="69.40014624595642"
                      y1={0}
                      x2="69.40014624595642"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1591"
                      x1="92.5335283279419"
                      y1={0}
                      x2="92.5335283279419"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1592"
                      x1="115.66691040992737"
                      y1={0}
                      x2="115.66691040992737"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1593"
                      x1="138.80029249191284"
                      y1={0}
                      x2="138.80029249191284"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1594"
                      x1="161.93367457389832"
                      y1={0}
                      x2="161.93367457389832"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                    <line
                      id="SvgjsLine1595"
                      x1="185.0670566558838"
                      y1={0}
                      x2="185.0670566558838"
                      y2="123.44760131835938"
                      stroke="#dddddd"
                      strokeDasharray={5}
                      strokeLinecap="butt"
                      className="apexcharts-gridline"
                    />
                  </g>
                  <line
                    id="SvgjsLine1604"
                    x1={0}
                    y1="123.44760131835938"
                    x2="185.0670566558838"
                    y2="123.44760131835938"
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                  <line
                    id="SvgjsLine1603"
                    x1={0}
                    y1={1}
                    x2={0}
                    y2="123.44760131835938"
                    stroke="transparent"
                    strokeDasharray={0}
                    strokeLinecap="butt"
                  />
                </g>
                <g id="SvgjsG1586" className="apexcharts-grid-borders">
                  <line
                    id="SvgjsLine1596"
                    x1={0}
                    y1={0}
                    x2="185.0670566558838"
                    y2={0}
                    stroke="#dddddd"
                    strokeDasharray={5}
                    strokeLinecap="butt"
                    className="apexcharts-gridline"
                  />
                  <line
                    id="SvgjsLine1602"
                    x1={0}
                    y1="123.44760131835938"
                    x2="185.0670566558838"
                    y2="123.44760131835938"
                    stroke="#dddddd"
                    strokeDasharray={5}
                    strokeLinecap="butt"
                    className="apexcharts-gridline"
                  />
                </g>
                <g
                  id="SvgjsG1561"
                  className="apexcharts-line-series apexcharts-plot-series"
                >
                  <g
                    id="SvgjsG1562"
                    className="apexcharts-series"
                    zindex={0}
                    seriesname="Tasks"
                    data:longestseries="true"
                    rel={1}
                    data:realindex={0}
                  >
                    <path
                      id="SvgjsPath1582"
                      d="M 0 113.1603012084961 L 23.133382081985474 115.21776123046875 L 46.26676416397095 61.72380065917969 L 69.40014624595642 78.18348083496093 L 92.5335283279419 20.574600219726562 L 115.66691040992737 72.01110076904297 L 138.80029249191284 41.149200439453125 L 161.93367457389832 76.12602081298829 L 185.0670566558838 20.574600219726562"
                      fill="none"
                      fillOpacity={1}
                      stroke="rgba(56,142,60,0.8)"
                      strokeOpacity={1}
                      strokeLinecap="round"
                      strokeWidth={5}
                      strokeDasharray={0}
                      className="apexcharts-line"
                      index={0}
                      clipPath="url(#gridRectMaskcb550siv)"
                      pathto="M 0 113.1603012084961 L 23.133382081985474 115.21776123046875 L 46.26676416397095 61.72380065917969 L 69.40014624595642 78.18348083496093 L 92.5335283279419 20.574600219726562 L 115.66691040992737 72.01110076904297 L 138.80029249191284 41.149200439453125 L 161.93367457389832 76.12602081298829 L 185.0670566558838 20.574600219726562"
                      pathfrom="M -1 123.44760131835938 L -1 123.44760131835938 L 23.133382081985474 123.44760131835938 L 46.26676416397095 123.44760131835938 L 69.40014624595642 123.44760131835938 L 92.5335283279419 123.44760131835938 L 115.66691040992737 123.44760131835938 L 138.80029249191284 123.44760131835938 L 161.93367457389832 123.44760131835938 L 185.0670566558838 123.44760131835938"
                      fillRule="evenodd"
                    />
                    <g
                      id="SvgjsG1563"
                      className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                      data:realindex={0}
                    >
                      <g
                        id="SvgjsG1565"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1566"
                          r={5}
                          cx={0}
                          cy="113.1603012084961"
                          className="apexcharts-marker no-pointer-events wrmxg5b8"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={0}
                          j={0}
                          index={0}
                          default-marker-size={5}
                        />
                        <circle
                          id="SvgjsCircle1567"
                          r={5}
                          cx="23.133382081985474"
                          cy="115.21776123046875"
                          className="apexcharts-marker no-pointer-events w7zew0ro9"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={1}
                          j={1}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1568"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1569"
                          r={5}
                          cx="46.26676416397095"
                          cy="61.72380065917969"
                          className="apexcharts-marker no-pointer-events wqkcyk7fv"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={2}
                          j={2}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1570"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1571"
                          r={5}
                          cx="69.40014624595642"
                          cy="78.18348083496093"
                          className="apexcharts-marker no-pointer-events wvqwiam2z"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={3}
                          j={3}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1572"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1573"
                          r={5}
                          cx="92.5335283279419"
                          cy="20.574600219726562"
                          className="apexcharts-marker no-pointer-events wf87d9ftk"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={4}
                          j={4}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1574"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1575"
                          r={5}
                          cx="115.66691040992737"
                          cy="72.01110076904297"
                          className="apexcharts-marker no-pointer-events wd6fjxljg"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={5}
                          j={5}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1576"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1577"
                          r={5}
                          cx="138.80029249191284"
                          cy="41.149200439453125"
                          className="apexcharts-marker no-pointer-events w81lpizo9"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={6}
                          j={6}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1578"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1579"
                          r={5}
                          cx="161.93367457389832"
                          cy="76.12602081298829"
                          className="apexcharts-marker no-pointer-events www6xverb"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={7}
                          j={7}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                      <g
                        id="SvgjsG1580"
                        className="apexcharts-series-markers"
                        clipPath="url(#gridRectMarkerMaskcb550siv)"
                      >
                        <circle
                          id="SvgjsCircle1581"
                          r={5}
                          cx="185.0670566558838"
                          cy="20.574600219726562"
                          className="apexcharts-marker no-pointer-events w32f6170b"
                          stroke="#ffffff"
                          fill="#388e3c"
                          fillOpacity={1}
                          strokeWidth={2}
                          strokeOpacity="0.9"
                          rel={8}
                          j={8}
                          index={0}
                          default-marker-size={5}
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id="SvgjsG1564"
                    className="apexcharts-datalabels"
                    data:realindex={0}
                  />
                </g>
                <line
                  id="SvgjsLine1605"
                  x1={0}
                  y1={0}
                  x2="185.0670566558838"
                  y2={0}
                  stroke="#b6b6b6"
                  strokeDasharray={0}
                  strokeWidth={1}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs"
                />
                <line
                  id="SvgjsLine1606"
                  x1={0}
                  y1={0}
                  x2="185.0670566558838"
                  y2={0}
                  strokeDasharray={0}
                  strokeWidth={0}
                  strokeLinecap="butt"
                  className="apexcharts-ycrosshairs-hidden"
                />
                <g
                  id="SvgjsG1607"
                  className="apexcharts-xaxis"
                  transform="translate(0, 0)"
                >
                  <g
                    id="SvgjsG1608"
                    className="apexcharts-xaxis-texts-g"
                    transform="translate(0, -10)"
                  >
                    <text
                      id="SvgjsText1610"
                      fontFamily="inherit"
                      x={0}
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 1.14599609375 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1611">Apr</tspan>
                      <title>Apr</title>
                    </text>
                    <text
                      id="SvgjsText1613"
                      fontFamily="inherit"
                      x="23.133382081985474"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 24.373780250549316 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1614">May</tspan>
                      <title>May</title>
                    </text>
                    <text
                      id="SvgjsText1616"
                      fontFamily="inherit"
                      x="46.26676416397095"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 47.26676559448242 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1617">Jun</tspan>
                      <title>Jun</title>
                    </text>
                    <text
                      id="SvgjsText1619"
                      fontFamily="inherit"
                      x="69.40014624595642"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 70.400146484375 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1620">Jul</tspan>
                      <title>Jul</title>
                    </text>
                    <text
                      id="SvgjsText1622"
                      fontFamily="inherit"
                      x="92.5335283279419"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 93.53353118896484 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1623">Aug</tspan>
                      <title>Aug</title>
                    </text>
                    <text
                      id="SvgjsText1625"
                      fontFamily="inherit"
                      x="115.66691040992737"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 116.7288465499878 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1626">Sep</tspan>
                      <title>Sep</title>
                    </text>
                    <text
                      id="SvgjsText1628"
                      fontFamily="inherit"
                      x="138.80029249191284"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 139.80030345916748 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1629">Oct</tspan>
                      <title>Oct</title>
                    </text>
                    <text
                      id="SvgjsText1631"
                      fontFamily="inherit"
                      x="161.93367457389832"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 163.1359920501709 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1632">Nov</tspan>
                      <title>Nov</title>
                    </text>
                    <text
                      id="SvgjsText1634"
                      fontFamily="inherit"
                      x="185.0670566558838"
                      y="146.44760131835938"
                      textAnchor="end"
                      dominantBaseline="auto"
                      fontSize="13px"
                      fontWeight={300}
                      fill="#37474f"
                      className="apexcharts-text apexcharts-xaxis-label "
                      style={{ fontFamily: "inherit" }}
                      transform="rotate(-45 186.0670576095581 140.78094482421875)"
                    >
                      <tspan id="SvgjsTspan1635">Dec</tspan>
                      <title>Dec</title>
                    </text>
                  </g>
                </g>
                <g id="SvgjsG1659" className="apexcharts-yaxis-annotations" />
                <g id="SvgjsG1660" className="apexcharts-xaxis-annotations" />
                <g id="SvgjsG1661" className="apexcharts-point-annotations" />
                <rect
                  id="SvgjsRect1662"
                  width={0}
                  height={0}
                  x={0}
                  y={0}
                  rx={0}
                  ry={0}
                  opacity={1}
                  strokeWidth={0}
                  stroke="none"
                  strokeDasharray={0}
                  fill="#fefefe"
                  className="apexcharts-zoom-rect"
                />
                <rect
                  id="SvgjsRect1663"
                  width={0}
                  height={0}
                  x={0}
                  y={0}
                  rx={0}
                  ry={0}
                  opacity={1}
                  strokeWidth={0}
                  stroke="none"
                  strokeDasharray={0}
                  fill="#fefefe"
                  className="apexcharts-selection-rect"
                />
              </g>
            </svg>
            <div className="apexcharts-tooltip apexcharts-theme-dark">
              <div
                className="apexcharts-tooltip-title"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 12
                }}
              />
              <div
                className="apexcharts-tooltip-series-group"
                style={{ order: 1 }}
              >
                <span
                  className="apexcharts-tooltip-marker"
                  style={{ backgroundColor: "rgb(56, 142, 60)" }}
                />
                <div
                  className="apexcharts-tooltip-text"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 12
                  }}
                >
                  <div className="apexcharts-tooltip-y-group">
                    <span className="apexcharts-tooltip-text-y-label" />
                    <span className="apexcharts-tooltip-text-y-value" />
                  </div>
                  <div className="apexcharts-tooltip-goals-group">
                    <span className="apexcharts-tooltip-text-goals-label" />
                    <span className="apexcharts-tooltip-text-goals-value" />
                  </div>
                  <div className="apexcharts-tooltip-z-group">
                    <span className="apexcharts-tooltip-text-z-label" />
                    <span className="apexcharts-tooltip-text-z-value" />
                  </div>
                </div>
              </div>
            </div>
            <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
              <div
                className="apexcharts-xaxistooltip-text"
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 12
                }}
              />
            </div>
            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
              <div className="apexcharts-yaxistooltip-text" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 px-6 pt-0">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
          Completed Tasks
        </h6>
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          Last Campaign Performance
        </p>
      </div>
      <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
        <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            strokeWidth={2}
            className="h-4 w-4 text-blue-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
          &nbsp;just updated
        </p>
      </div>
    </div>
  </div>
  <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
        <div>
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
            Projects
          </h6>
          <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              strokeWidth={3}
              className="h-4 w-4 text-blue-gray-200"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <strong>30 done</strong> this month
          </p>
        </div>
        <button
          aria-expanded="false"
          aria-haspopup="menu"
          id=":r7:"
          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currenColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  companies
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  members
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  budget
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  completion
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src="/material-tailwind-dashboard-react/img/logo-xd.svg"
                    alt="Material XD Version"
                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    Material XD Version
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img
                  src="/material-tailwind-dashboard-react/img/team-1.jpeg"
                  alt="Romina Hadid"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-2.jpeg"
                  alt="Ryan Tompson"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-3.jpeg"
                  alt="Jessica Doe"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-4.jpeg"
                  alt="Alexander Smith"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $14,000
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    60%
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src="/material-tailwind-dashboard-react/img/logo-atlassian.svg"
                    alt="Add Progress Track"
                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    Add Progress Track
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img
                  src="/material-tailwind-dashboard-react/img/team-2.jpeg"
                  alt="Ryan Tompson"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-4.jpeg"
                  alt="Alexander Smith"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $3,000
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    10%
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      style={{ width: "10%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src="/material-tailwind-dashboard-react/img/logo-slack.svg"
                    alt="Fix Platform Errors"
                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    Fix Platform Errors
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img
                  src="/material-tailwind-dashboard-react/img/team-3.jpeg"
                  alt="Jessica Doe"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-1.jpeg"
                  alt="Romina Hadid"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  Not set
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    100%
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src="/material-tailwind-dashboard-react/img/logo-spotify.svg"
                    alt="Launch our Mobile App"
                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    Launch our Mobile App
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img
                  src="/material-tailwind-dashboard-react/img/team-4.jpeg"
                  alt="Alexander Smith"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-3.jpeg"
                  alt="Jessica Doe"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-2.jpeg"
                  alt="Ryan Tompson"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-1.jpeg"
                  alt="Romina Hadid"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $20,500
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    100%
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src="/material-tailwind-dashboard-react/img/logo-jira.svg"
                    alt="Add the New Pricing Page"
                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    Add the New Pricing Page
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <img
                  src="/material-tailwind-dashboard-react/img/team-4.jpeg"
                  alt="Alexander Smith"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"
                />
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $500
                </p>
              </td>
              <td className="py-3 px-5 border-b border-blue-gray-50">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    25%
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      style={{ width: "25%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-5 ">
                <div className="flex items-center gap-4">
                  <img
                    src="/material-tailwind-dashboard-react/img/logo-invision.svg"
                    alt="Redesign New Online Shop"
                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                    Redesign New Online Shop
                  </p>
                </div>
              </td>
              <td className="py-3 px-5 ">
                <img
                  src="/material-tailwind-dashboard-react/img/team-1.jpeg"
                  alt="Romina Hadid"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white"
                />
                <img
                  src="/material-tailwind-dashboard-react/img/team-4.jpeg"
                  alt="Alexander Smith"
                  className="inline-block relative object-cover object-center !rounded-full w-6 h-6 rounded-md cursor-pointer border-2 border-white -ml-2.5"
                />
              </td>
              <td className="py-3 px-5 ">
                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  $2,000
                </p>
              </td>
              <td className="py-3 px-5 ">
                <div className="w-10/12">
                  <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    40%
                  </p>
                  <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full font-sans rounded-full text-xs font-medium h-1">
                    <div
                      className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 p-6">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-2">
          Orders Overview
        </h6>
        <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            aria-hidden="true"
            className="h-3.5 w-3.5 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
          <strong>24%</strong> this month
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-start gap-4 py-3">
          <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="!w-5 !h-5 text-blue-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">
              $2400, Design changes
            </p>
            <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">
              22 DEC 7:20 PM
            </span>
          </div>
        </div>
        <div className="flex items-start gap-4 py-3">
          <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="!w-5 !h-5 text-blue-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">
              New order #1832412
            </p>
            <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">
              21 DEC 11 PM
            </span>
          </div>
        </div>
        <div className="flex items-start gap-4 py-3">
          <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="!w-5 !h-5 text-blue-gray-300"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </div>
          <div>
            <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">
              Server payments for April
            </p>
            <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">
              21 DEC 9:34 PM
            </span>
          </div>
        </div>
        <div className="flex items-start gap-4 py-3">
          <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="!w-5 !h-5 text-blue-gray-300"
            >
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path
                fillRule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">
              New card added for order #4395133
            </p>
            <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">
              20 DEC 2:20 AM
            </span>
          </div>
        </div>
        <div className="flex items-start gap-4 py-3">
          <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="!w-5 !h-5 text-blue-gray-300"
            >
              <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
            </svg>
          </div>
          <div>
            <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">
              Unlock packages for development
            </p>
            <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">
              18 DEC 4:54 AM
            </span>
          </div>
        </div>
        <div className="flex items-start gap-4 py-3">
          <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="!w-5 !h-5 text-blue-gray-300"
            >
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              <path
                fillRule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                clipRule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
            </svg>
          </div>
          <div>
            <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">
              New order #9583120
            </p>
            <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">
              17 DEC
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>

    )
}
export default Home;