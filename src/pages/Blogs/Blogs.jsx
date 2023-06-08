const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-blue-500 py-8">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
            <p className="text-lg w-1/2 mx-auto">
              This page provides explore topics on various topics including access tokens, refresh tokens, SQL and NoSQL
              databases, Express.js, Nest.js, and MongoDB aggregation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4">
          <h1 className="text-2xl font-bold mb-4">
            What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h1>
          <p className="text-gray-800">
            A refresh token just helps you re-validate a user without them having to re-enter their login credentials
            multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to
            access confidential resources. This method provides an enhanced user experience all while keeping a robust
            security interface.
          </p>
          <p className="text-gray-800">
            JSON Web Token (JWT) access tokens conform to the JWT standard and contain information about an entity in the
            form of claims. They are self-contained therefore it is not necessary for the recipient to call a server to
            validate the token. Access tokens issued for the Management API and access tokens issued for any custom API that
            you have registered with Auth0 follow the JWT standard, which means that their basic structure conforms to the
            typical JWT structure, and they contain standard JWT claims asserted about the token itself.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <h1 className="text-2xl font-bold">Compare SQL and NoSQL databases</h1>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">SQL databases</th>
                <th className="px-4 py-2">NoSQL databases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Relational Database management system</td>
                <td className="border px-4 py-2">Distributed Database management system</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Vertically Scalable</td>
                <td className="border px-4 py-2">Horizontally Scalable</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Fixed or predefined Schema</td>
                <td className="border px-4 py-2">Dynamic Schema</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Not suitable for hierarchical data storage</td>
                <td className="border px-4 py-2">Best suitable for hierarchical data storage</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Can be used for complex queries</td>
                <td className="border px-4 py-2">Not good for complex queries</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-200 p-4">
          <h1 className="text-2xl font-bold">What is Express.js? What is Nest.js?</h1>
          <p className="text-gray-800">
            ExpressJS is a free, open-source web application framework for Node.js. It provides various features to quickly
            and easily build web applications using JavaScript. It is a layer built on top of Node.js that helps in server
            and route management.
          </p>
          <p className="text-gray-800">
            NestJS is an open-source framework that helps you build scalable Node.js server-side applications. Heavily
            inspired by Angular, it is built on TypeScript and uses progressive JavaScript. It has a simple design with 3
            main components: controllers, modules, and providers.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <h1 className="text-2xl font-bold">What is MongoDB aggregate and how does it work?</h1>
          <p className="text-gray-800">
            Aggregation is a way of processing a large number of documents in a collection by means of passing them through
            different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort,
            group, reshape, and modify documents that pass through the pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
