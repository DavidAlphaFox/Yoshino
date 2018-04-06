
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import Icon from '../Icon';

export interface IInputNumberProps extends IBaseComponent {
  /**
   * 输入框的值
   */
  value: number;
  /**
   * 组件大小
   */
  size: 'small' | 'default' | 'large';
  /**
   * 变化回调事件
   */
  onChange?: (value: number) => void;
  /**
   * 最小值
   */
  min: number;
  /**
   * 最大值
   */
  max: number;
  /**
   * 步长
   */
  step: number;
}

export interface IInputNumberState {
  /**
   * 内部状态维护
   */
  value: number;
}

/**
 * **数字输入框**-仅用于数字输入。该组件为了保证输入值为纯数字，state放在内部维护，value只是一个初始值，要获得最新值请通过onChange，在外部改变value不会影响视图刷新。
 */
export class InputNumber extends Component<IInputNumberProps, IInputNumberState> {
  static defaultProps = {
    size: 'default',
    min: 0,
    max: 10,
    value: 0,
    step: 1,
  };

  state = {
    value: this.props.value,
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {onChange, max, min} = this.props;
    const value = e.target.value;
    if (value === '' || value === '-') {
      this.setState({
        value: min,
      });
      if (onChange) {
        onChange(min);
      }
    }

    if (!!/\d/.exec(value) && +value <= max && +value >= min) {
      this.setState({
        value: +value,
      });
      if (onChange) {
        onChange(+e.target.value);
      }
    }
  }

  onPlus = () => {
    const value =  this.state.value + this.props.step;
    if (value <= this.props.max) {
      this.setState({
        value,
      });
    }
  }

  onMinus = () => {
    const value =  this.state.value - this.props.step;
    if (value >= this.props.min) {
      this.setState({
        value,
      });
    }
  }

  render() {
    const {className, style, size, onChange, value, ...otherProps} = this.props;
    const preCls = 'yoshino-input-number';
    const clsName = classNames(
      className, preCls, `${preCls}-${size}`,
    );
    return (
      <div
       className={`${preCls}-wrapper`}
      >
        <input
          className={clsName}
          style={style}
          value={this.state.value}
          onChange={this.onChange}
          {...otherProps}
        />
        <div className={`${preCls}-control`}>
          <div onClick={this.onPlus}><Icon type='plus' style={{fontSize: '12px'}}/></div>
          <div onClick={this.onMinus}><Icon type='minus' style={{fontSize: '12px'}}/></div>
        </div>
      </div>
    );
  }
}

export default InputNumber;
