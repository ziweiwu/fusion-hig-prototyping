import React from "react";
import PropTypes from "prop-types";

/**
 * Row component for the Table
 */
class TableRow extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleExpand = this._handleExpand.bind(this);
  }

  _handleExpand(expanded) {
    const { onRowExpand, rowData, rowIndex, rowKey, rootIndex } = this.props;
    if (onRowExpand) {
      onRowExpand({ expanded, rowData, rowIndex, rowKey, rootIndex });
    }
  }

  _getEventHandlers(handlers = {}) {
    const { rowData, rowIndex, rowKey, onRowHover } = this.props;
    const eventHandlers = {};
    Object.keys(handlers).forEach(eventKey => {
      const callback = handlers[eventKey];
      if (typeof callback === "function") {
        eventHandlers[eventKey] = event => {
          callback({ rowData, rowIndex, rowKey, event });
        };
      }
    });

    if (onRowHover) {
      const mouseEnterHandler = eventHandlers.onMouseEnter;
      eventHandlers.onMouseEnter = event => {
        onRowHover({
          hovering: true,
          rowData,
          rowIndex,
          rowKey,
          event
        });

        if (mouseEnterHandler) mouseEnterHandler(event);
      };

      const mouseLeaveHandler = eventHandlers.onMouseLeave;
      eventHandlers.onMouseLeave = event => {
        onRowHover({
          hovering: false,
          rowData,
          rowIndex,
          rowKey,
          event
        });

        if (mouseLeaveHandler) mouseLeaveHandler(event);
      };
    }

    return eventHandlers;
  }

  render() {
    const {
      className,
      style,
      isScrolling,
      columns,
      rowData,
      rowIndex,
      depth,
      rowEventHandlers,
      expandColumnKey,
      expandable,
      expanded,
      renderRow,
      renderCell,
      expandIcon: ExpandIcon
    } = this.props;

    const cells = renderRow
      ? renderRow({ isScrolling, columns, rowData, rowIndex, depth })
      : columns.map((column, columnIndex) =>
          renderCell({
            column,
            columnIndex,
            isScrolling,
            rowData,
            rowIndex,
            expandIcon: column.key === expandColumnKey && (
              <ExpandIcon
                depth={depth}
                expandable={expandable}
                expanded={expanded}
                onExpand={this._handleExpand}
              />
            )
          })
        );

    const eventHandlers = this._getEventHandlers(rowEventHandlers);
    return (
      <div className={className} style={style} {...eventHandlers}>
        {cells}
      </div>
    );
  }
}

TableRow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  isScrolling: PropTypes.bool,
  rowData: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expandColumnKey: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  depth: PropTypes.number,
  rootIndex: PropTypes.number,
  onRowHover: PropTypes.func,
  onRowExpand: PropTypes.func,
  rowEventHandlers: PropTypes.object,
  renderRow: PropTypes.func,
  renderCell: PropTypes.func,
  expandIcon: PropTypes.any
};

export default TableRow;
