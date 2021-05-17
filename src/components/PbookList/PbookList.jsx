import React from "react";
import { connect } from "react-redux";
import { deleteEntry } from "../../redux/entries/entries-actions";
import styles from "./PbookList.module.css";

const PbookList = ({ entries, onDelete }) => {
  return (
    <section>
      <ul className={styles.pbookList}>
        <li className={`${styles.entry} ${styles.pbookHeader}`}>
          <span>Name</span>
          <span>Phone number</span>
          <span>Actions</span>
        </li>
        {entries.map((entry) => (
          <li className={styles.entry} key={entry.id}>
            <span>{entry.name}</span>
            <span>{entry.number}</span>
            <div className={styles.controlBtnContainer}>
              <button
                className={styles.entryControlBtn}
                type="button"
                data-id={entry.id}
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const showFilteredentries = (entries, filterValue) => {
  return entries.filter((entry) => entry.name.includes(filterValue));
};

const mapStateToProps = (state) => ({
  entries: showFilteredentries(state.contacts.items, state.contacts.filter),
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (event) => dispatch(deleteEntry(event.target.dataset.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PbookList);
