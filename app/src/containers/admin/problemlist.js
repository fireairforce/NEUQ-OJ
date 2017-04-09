/**
 * Created by out_xu on 17/4/4.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createContest, deleteProblem, getProblemTable, searchProblems } from '../../actions'
import ProblemList from '../../components/admin/problem/problemlist'

@connect(
  state => ({
    problems: state.problems,
    loading: state.loading
  }),
  dispatch => bindActionCreators({getProblemTable, searchProblems, createContest, deleteProblem}, dispatch),
)
class ProblemListManageContainer extends Component {
  render () {
    const {problems: {problemtable}, loading, getProblemTable, searchProblems, createContest, deleteProblem} = this.props
    return (
      <ProblemList
        data={problemtable.problems}
        loading={loading}
        getProblemTable={getProblemTable}
        searchProblems={searchProblems}
        createContest={createContest}
        deleteProblem={deleteProblem}
      />
    )
  }
}

export default ProblemListManageContainer
