import React, { useState } from 'react';

import Modal from '../components/Modal';

function ExamplePortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1 className="problems">
        Problem: I want to render Modal inside an overflow: hidden / z-index: -1 component (e.g. navbar, dropdown)
      </h1>
      <h1>Use: React Portal</h1>

      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            position: 'relative',
            padding: '1rem',
            background: '#eaedf1',
            boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
            zIndex: 2,
          }}
        >
          Main Nav
        </div>

        <div
          className="navbar"
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <button style={{ marginRight: '1rem' }} onClick={() => setShowModal(true)}>&larr; Back</button>
          Sub Nav
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <h1>Are you sure?!?!?!?!?!</h1>
            </Modal>
          )}
        </div>

        <div
          style={{
            background: '#fbfbfb',
            minHeight: '150px',
            padding: '1rem',
          }}
        >
          <strong>Content of page</strong>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam similique sit laboriosam alias commodi asperiores illo illum ad voluptatum, temporibus pariatur quisquam quidem suscipit consequuntur amet ullam vero veritatis!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur architecto ratione omnis, reiciendis porro corporis a unde error quam doloremque quos, mollitia alias id amet iusto, et nisi voluptatibus voluptas.</p>
        </div>
      </div>
    </div>
  );
}

export default ExamplePortal;
