Rspec.describe ConversationsController, type: controller do
  describe '#index' do
    context 'success' do
      #list of conversations for this user

      #TODO add with_id to conversation
      #TODO set user in controller
      # Setting up all requirements for tests
      let!(:owner) {
        User.create(email: 'frank@gmail.com',
          first_name: 'Frank',
          last_name: 'Smith',
          username: 'f-bomb',
        )
      }
      let!(:recipient) {
        User.create(email: 'joe@gmail.com',
          first_name: 'Joe',
          last_name: 'Blo',
          username: 'j-dawg',
        )
      }

      let!(:conversations) { [
        owner.conversations.create(subject: 'Eggs', recipient: recipient),
        owner.conversations.create(subject: 'Cats', recipient: recipient)
      ] }

      let(:expected_response) {
        {
          conversations: [
            {
              subject: "Eggs",
              recipient_id: recipient.id
            },
            {
              subject: "Cats",
              recipient_id: recipient.id
            }
          ]
        }.to_json
      }

# executing specific call on server to the route that matches index for this  controller.
      it 'returns the list of conversations for that user' do
        get :index
        expect(response.body).to equal expected_response
      end
    end
  end
end
