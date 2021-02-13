class User < ApplicationRecord
    has_one :dataPerson
    has_one :deliveryAddress
    has_one :dataLogin
    has_one :dataCreation
    has_many :order
    has_many :opinion
end
