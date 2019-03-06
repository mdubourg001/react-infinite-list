import React, { useRef, useEffect, useState } from "react";

const InfiniteList = ({
  rows,
  fetchData,
  limit,
  containerClasses,
  containerStyle,
  fetchThreshold,
  children
}) => {
  const [offset, setOffset] = useState(0);
  const viewRef = useRef(null);
  const [refs, setRefs] = useState(new Map());
  const fetchTh = fetchThreshold ? fetchThreshold : 5;

  const defaultStyle = {
    width: "200px",
    maxHeight: "100px",
    overflowY: "scroll",
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto"
  };

  const isScrolledIntoView = (elem, view) => {
    const viewRect = view.getBoundingClientRect();
    const elemRect = elem.getBoundingClientRect();

    return (
      elemRect.top + elemRect.height >= viewRect.top &&
      elemRect.top < viewRect.top + viewRect.height
    );
  };

  useEffect(() => {
    if (rows.length === 0) fetchData(offset);
    setOffset(rows.length);
  }, [rows]);

  return (
    <div
      id="infinite-list-wrapper"
      ref={viewRef}
      onScroll={() => {
        for (
          let i = refs.size - fetchTh < 0 ? 0 : refs.size - fetchTh;
          i < refs.size;
          i++
        ) {
          if (isScrolledIntoView(refs.get(i), viewRef.current)) {
            fetchData(offset, limit);
            break;
          }
        }
      }}
      className={containerClasses}
      style={containerStyle ? containerStyle : defaultStyle}
    >
      {rows.map((row, index) =>
        children(row, index, c => setRefs(refs.set(index, c)))
      )}
    </div>
  );
};

export default InfiniteList;
