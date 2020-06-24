import { is } from '@magic/test'
import * as NoSpy from '../src/index.mjs'

const propTypes = NoSpy.propTypes.NoSpy

const expectedPropTypes = [
  {
    key: 'show',
    type: 'boolean',
    required: true,
  },
  {
    key: 'title',
    type: 'string',
    required: true,
  },
  {
    key: 'content',
    type: 'string',
    required: true,
  },
  {
    key: 'buttonText',
    type: 'string',
    required: true,
  },
]

export default [
  { fn: is.fn(NoSpy.View), info: 'expect NoSpy.View to be a function' },
  { fn: is.array(propTypes), info: 'expect NoSpy.propTypes.NoSpy to be an array' },
  { fn: is.deep.eq(propTypes, expectedPropTypes), info: 'propTypes meet expectations' },
]
