import React from 'react'

interface Props {
  options: {
    container: string,
    [key: string]: any
  },
  style: any
}

export class LuckySheet extends React.Component<Props> {
  constructor (props: Props) {
    super(props)
  }

  componentDidMount () {
    const luckysheet = window.luckysheet
    luckysheet.create(this.props.options)
  }

  render () {
    const { options, style } = this.props
    const { container: id } = options

    return (
      <div
        id={id}
        style={style}
      ></div>
    )
  }
}
