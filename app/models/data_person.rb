class DataPerson < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :admin, optional: true
    belongs_to :order, optional: true
end
