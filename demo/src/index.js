import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'
import QueryAssist from '../../src'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, sans-serif;
  }
`

const Container = styled('div')`
  background: #FFFFFF;
  width: 50vw;
  height: 100vh;
  padding: 20px;
`

const Title = styled('h2')`
  color: #000000;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 1.25rem;
`

const Assist = styled(QueryAssist)`
  margin-bottom: 50px;
`

const Footer = styled('div')`
  padding: 15px;
  text-align: center;
`

export const Link = styled('a')`
  display: inline-block;
  background: #D0D0D0;
  border: 1px solid #58499B;
  border-radius: 4px;
  color: #000000;
  font-weight: 300;
  text-decoration: none;
  padding: 7px 15px;
  cursor: pointer;
`

const data = [
  {
    name: 'LOB',
    type: 'string',
    enumerations: ['Medicare']
  },
  {
    name: 'State',
    type: 'string',
    enumerations: ['FL', 'NY', 'NJ', 'CA', 'TX', 'MO']
  },
  {
    name: 'Authorization_Status',
    type: 'string',
    enumerations: ['Pending', 'Approve', 'Deny']
  },
  {
    name: 'Authorization_Type',
    type: 'string',
    enumerations: ['In Patient', 'Out Patient']
  },
  {
    name: 'Date_Range',
    type: 'string',
    enumerations: ['Last 1 month', 'Last 3 months', 'Last 6 months', 'Last 1 year', 'More than a year']
  },
  {
    name: 'Member',
    type: 'string',
    enumerations: null
  },
  {
    name: 'Provider',
    type: 'string',
    enumerations: null
  },


]

class Demo extends Component {
  render () {
    const inputProps = {
      bg: '#FFFFFF',
      border: '1px solid #1F1E21',
      borderRadius: '4px',
      color: '#9FA2B2',
      placeholderColor: 'rgba(255, 255, 255, 0.2)',
      tokenColor: '#9FA2B2',
      fontSize: '16px',
      fontWeight: 300,
      fontFamily: 'monospace',
      lineHeight: '20px',
      p: '15px 20px'
    }

    const dropdownProps = {
      bg: '#F0F0F0',
      borderRadius: '2px',
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: '-apple-system, sans-serif'
    }

    const selectorProps = {
      bg: '#F5F5F5',
      border: '1px solid #C0C0C0',
      color: '#000000'
    }

    const footer = () => (''
      // <Footer>
      //   <Link
      //     target='_blank'
      //     href='centene.com'>
      //     Learn more
      //   </Link>
      // </Footer>
    )

    return (
      <Container>
        <Title>TDM Query Search</Title>
        <Assist
          placeholder='Search Prior Authorization Data'
          onSubmit={query => console.log(`output query: ${query}`)}
          data={data}
          inputProps={inputProps}
          dropdownProps={dropdownProps}
          selectorProps={selectorProps}
          footerComponent={footer} />

        <Title>Complex Query Example</Title>
        <Assist
          placeholder='Search Logs ⌘ ⇧ F'
          defaultValue={`keyword1 (LOB:Medicare AND State: "FL") \nkeyword2 ((LOB:Medicare and State:'TX') OR Authorization_Status:'Approve')\nkeyword3 LOB:Medicare and State:'MO' and Date_rance: Less than 3 months*`}
          onSubmit={query => console.log(`output query: ${query}`)}
          data={data}
          inputProps={inputProps}
          dropdownProps={dropdownProps}
          selectorProps={selectorProps}
          footerComponent={footer} />
      </Container>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
